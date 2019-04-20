import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataDriverService } from '../data-driver.service';

import * as d3 from 'd3';
import * as d3sankey from 'd3-sankey';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  message: string;

  constructor(private data: DataDriverService, private router: Router) { }

  ngOnInit() : void {
    this.data.currentMessage.subscribe(message => this.message = message);
    // TODO: DO IT this.drawChart();
  }

  newMessage(chartData: string) {
    this.data.changeMessage("source,target,value\n" + chartData);
    this.drawChart();
  }

  visualize(chartData: string) {
    this.data.changeMessage("source,target,value\n" + chartData);
    this.router.navigateByUrl('visualize');

  }

  // Manages key presses in textarea (sankey typing)
  public keyPressed(event: any) {
    this.message = "source,target,value\n" + event.target.value;
    this.drawChart();
  }

  public getData(data:string) {
    var data2 = data.split('\n');
    var data3 = data2.map((value) => value.split(','));
    // data3 contains sufficient data
  }

  public drawChart() {

    // Error checking for null value
    if (this.message == "" || this.message == null) {
      return;
    }

    // Color scheme
    const colors = d3.scaleOrdinal()
        .domain([
          'red',
          'green'
        ])
        .range([
          '#ffb2a8',
          '#89ef56'
        ]);

    // Selecting Sankey element from HTML
    var svg = d3.select("#sankey"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    // Clearing previous graph
    svg.selectAll("*").remove();

    // Formatting numbers in Sankey
    var formatNumber = d3.format(",.0f"),
        format = function (d: any) { return formatNumber(d) }, //+ " Units"; }, Optional units
        color = d3.scaleOrdinal(d3.schemeCategory10);

    // Initializing Sankey variable
    var sankey = d3sankey.sankey()
        .nodeWidth(15)
        .nodePadding(10)
        .extent([[1, 1], [width - 1, height - 6]]);

    var link = svg.append("g")
        .attr("class", "links")
        .attr("fill", "none")
        .attr("stroke", "none")
        .attr("stroke-opacity", 1)
        .selectAll("path")
        .on('mouseover', function() {
          d3.select(this).style('stroke-opacity', 0.5);
        })
        .on('mouseout', function() {
          d3.select(this).style('stroke-opacity', 0.2);
        });
  

    var node = svg.append("g")
        .attr("class", "nodes")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .selectAll("g");
    
    
    // Initializing graph (data container)
    var graph = { "nodes" : [], "links" : [] };

    var sankeyData = d3.csvParse(this.message);

    sankeyData.forEach(d => {
      graph.nodes.push({ "name": d.source});
      graph.nodes.push({ "name": d.target});
      graph.links.push({ "source" : d.source,
                        "target" : d.target,
                        "value": +d.value });
    });

    graph.nodes = d3.map(graph.nodes, function(d) {return d.name;}).keys();

    graph.links.forEach(function (d, i) {
      graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
      graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
    });

    graph.nodes.forEach(function (d, i) {
      graph.nodes[i] = { "name": d };
    });
    
    sankey(graph);

    // Color definitions
    const defs = svg.append('defs');
          
    link = link
        .data(graph.links)
        .enter().append("path")
        .attr("d", d3sankey.sankeyLinkHorizontal())
        .attr("stroke-width", function (d: any) { return Math.max(1, d.width); });

    link.append("title")
        .text(function (d: any) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });

    node = node
        .data(graph.nodes)
        .enter().append("g");

    node.append("rect")
        .attr("x", function (d: any) { return d.x0; })
        .attr("y", function (d: any) { return d.y0; })
        .attr("height", function (d: any) { return d.y1 - d.y0; })
        .attr("width", function (d: any) { return d.x1 - d.x0; })
        .style("fill", function (d: any) { 
          if (colors.domain().indexOf(d.name) > -1) {
            return d.color = colors(d.name);
          } else {
            return d.color = getRandomColor();
          }
         });

    node.append("text")
        .attr("x", function (d: any) { return d.x0 - 6; })
        .attr("y", function (d: any) { return (d.y1 + d.y0) / 2; })
        .attr("dy", "0.35em")
        .style('fill', 'white')
        .style('font-weight', 'bold')
        .style('font-size', '14px')
        .attr("text-anchor", "end")
        .text(function (d: any) { return d.name + " [" + format(d.value) + ']'; })
        .filter(function (d: any) { return d.x0 < width / 2; })
        .attr("x", function (d: any) { return d.x1 + 6; })
        .attr("text-anchor", "start");

    link.style('stroke', (d,i) => {
      
      // Unique gradient ID
      const gradientID = `gradient${i}`;

      const startColor = d.source.color;
      const stopColor = d.target.color;

      const linearGradient = defs.append('linearGradient')
            .attr('id', gradientID);
      
      linearGradient.selectAll('stop').data([
          {offset: '10%', color: startColor },      
          {offset: '90%', color: stopColor } 
      ])
      .enter().append('stop')
      .attr('offset', d => {
        return d.offset; 
      })   
      .attr('stop-color', d => {
        return d.color;
      });
      
      return `url(#${gradientID})`;

    });

    node.append("title")
        .text(function (d: any) { return d.name + "\n" + format(d.value); });
    
    
    // Utility functions
    
    // Method to generate random color
    function getRandomColor() {
      var letters = '123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }

}

