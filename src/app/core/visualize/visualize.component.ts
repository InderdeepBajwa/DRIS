import { Component, OnInit } from '@angular/core';
import { DataDriverService } from './data-driver.service';
import * as d3 from 'd3';
import * as d3sankey from 'd3-sankey';
import saveSvgAsPng from 'save-svg-as-png';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})
export class VisualizeComponent implements OnInit {
  message: string;
  
  
  width = 1200;
  height = 600;

  constructor(private receivedData: DataDriverService) {
  }

  ngOnInit() {
    this.receivedData.currentMessage.subscribe(message => this.message = message);
    this.drawChart();
  }

  public drawChart() {

    // Error checking for null value
    if (this.message == "" || this.message == null) {
      return;
    }
    
    // Color scheme
    const color = d3.scaleOrdinal()
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
        format = function (d: any) { return formatNumber(d) }; // (Optional) to add functionality of units: + " TWh"; },
        

    // Initializing Sankey variable
    var sankey = d3sankey.sankey()
        .nodeWidth(15)
        .nodePadding(10)
        .extent([[1, 1], [width - 1, height - 6]]);

    var link = svg.append("g")
        .attr("class", "links")
        .attr("fill", "none")
        .attr("stroke-opacity", 0.2)
        .selectAll("path");

    var node = svg.append("g")
        .attr("class", "nodes")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
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

    // append a defs (for definition) element to your SVG
    const defs = svg.append('defs');
    
    sankey(graph);

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
        // @ts-ignore
        .attr("fill", function (d: any) { 
          if(color.domain().indexOf(d.name) > -1){
            return d.color = color(d.name);  
          } else {
            return d.color = getRandomColor();
          }
         });

    node.append("text")
        .attr("x", function (d: any) { return d.x0 - 6; })
        .attr("y", function (d: any) { return (d.y1 + d.y0) / 2; })
        .attr("dy", "0.35em")
        .attr("text-anchor", "end")
        .text(function (d: any) { return d.name + " [" + format(d.value) + ']'; })
        .filter(function (d: any) { return d.x0 < width / 2; })
        .attr("x", function (d: any) { return d.x1 + 6; })
        .attr("text-anchor", "start");

    node.append("title")
        .text(function (d: any) { return d.name + "\n" + format(d.value); });

    // add gradient to links
    link.style('stroke', (d, i) => {
      // make unique gradient ids  
      const gradientID = `gradient${i}`;

      // @ts-ignore
      const startColor = d.source.color;
      // @ts-ignore
      const stopColor = d.target.color;

      var linearGradient = defs.append('linearGradient')
          .attr('gradientUnits', 'userSpaceOnUse')
          .attr('id', gradientID);
        
      linearGradient.selectAll('stop') 
        .data([                             
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

    // Utility functions
    
    // Method to generate random color
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
}
