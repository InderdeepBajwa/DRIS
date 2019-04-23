import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataDriverService } from '../data-driver.service';
import saveSvgAsPng from 'save-svg-as-png';

import * as d3 from 'd3';
import * as d3sankey from 'd3-sankey';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  // Listening for keypress combinations

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.keyCode == 13 && event.ctrlKey) {
      this.visualize(this.message, true);
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 83) {
      this.quickSave();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 83) {

    }
  }

  message: string;
  uniqueData: string = "";

  colorInput: string;
  // Color scheme
  color =
    // Initializing domain and range to null
    d3.scaleOrdinal()
     .domain([
       ''
    ])
      .range([
        ''
  ]);

  constructor(private data: DataDriverService, private router: Router) { }

  ngOnInit() : void {
    this.data.currentMessage.subscribe(message => this.message = message);
    // TODO: DO IT this.drawChart();
  }

  newMessage(chartData: string) {
    this.data.changeMessage("source,target,value\n" + chartData, 'domain,range\n' + this.colorInput);
    this.drawChart();
  }

  visualize(chartData: string, doesContainHeader: boolean = false) {
    if (doesContainHeader) {
      this.data.changeMessage(chartData, 'domain,range\n' + this.colorInput);
    } else {
      this.data.changeMessage("source,target,value\n" + chartData, 'domain,range\n' + this.colorInput);
    }
    this.router.navigateByUrl('visualize');
  }

  // Quick save function
  quickSave() {
    saveSvgAsPng.saveSvgAsPng(d3.select('svg').node(), 'save.png', {backgroundColor: '#FFFFFF', encoderOptions: 1, scale: 2})
  }

  // Save URI of Sankey image to cloud
  saveToCloud() {
    saveSvgAsPng.svgAsDataUri(d3.select('svg').node(), {}, function(uri) {
      console.log('uri', uri);
      window.location.href
    });
  }


  // Manages key presses in textarea (sankey typing)
  public keyPressed(event: any) {
    this.message = "source,target,value\n" + event.target.value;
    this.drawChart();
  }

  public colorSelect(event: any, chartData: string) {
    // Saving user color input
    
    this.colorInput =event.target.value;

    let colors = d3.csvParse("domain,range\n" + this.colorInput);
    
    let domainRange = { 'domain' : [], 'range' : [] };

    colors.forEach(d => {
      domainRange.domain.push(d.domain);
      domainRange.range.push(d.range);
    })

    this.color = d3.scaleOrdinal()
        .domain(domainRange.domain)
        .range(domainRange.range);

    this.newMessage(chartData);
    this.drawChart();
  }

  public getData(data:string) {
    var data2 = data.split('\n');
    var data3 = data2.map((value) => value.split(','));
    // data3 contains sufficient data
  }

  public drawChart() {

    // Error checking for null value
    if (this.message == "" || this.message == null || this.message == "default message") {
      console.log("Err " + this.message);
      return;
    }
    
    // Color scheme
    const color = this.color;
    
    // Removing spaces from input
    this.message = this.message.replace(/ /g, '')

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
      this.uniqueData += d.source + '\n';
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
    
    try {
      sankey(graph);
    }
    catch (e) {
      if(e.message == 'circular link') {
        console.log("ITS A CIRCLE!!!");
      }
      else {
        console.log(e.message);
      }
      return;
    }

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


    let words = this.uniqueData.split('\n');
    


    this.color = color;

    // Utility functions

    // Color filter

    function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
    }

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

