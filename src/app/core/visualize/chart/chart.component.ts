import { Component, OnInit } from '@angular/core';
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

  chart: any;

  chartData: DAG;

  nodes; links;

  constructor(private data: DataDriverService, private router: Router) { }

  ngOnInit() : void {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.drawChart();
  }

  newMessage(chartData: string) {
    this.data.changeMessage(chartData);
  }

  visualize(chartData: string) {
    this.data.changeMessage(chartData);
    this.router.navigateByUrl('visualize');

  }

  public getData(data:string) {
    var data2 = data.split('\n');
    var data3 = data2.map((value) => value.split(','));
    // data3 contains sufficient data
  }

  public drawChart() {
    
    var svg = d3.select("#sankey"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    var formatNumber = d3.format(",.0f"),
        format = function (d: any) { return formatNumber(d) + " TWh"; },
        color = d3.scaleOrdinal(d3.schemeCategory10);

    var sankey = d3sankey.sankey()
        .nodeWidth(15)
        .nodePadding(10)
        .extent([[1, 1], [width - 1, height - 6]]);

    var link = svg.append("g")
        .attr("class", "links")
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("stroke-opacity", 0.2)
        .selectAll("path");

    var node = svg.append("g")
        .attr("class", "nodes")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .selectAll("g");
        
    d3.json("//cdn.rawgit.com/q-m/d3.chart.sankey/master/example/data/product.json")
        .then(function(data: DAG) {
      // @ts-ignore
      sankey(data);
      link = link
          .data(data.links)
          .enter().append("path")
          .attr("d", d3sankey.sankeyLinkHorizontal())
          .attr("stroke-width", function (d: any) { return Math.max(1, d.width); });

      link.append("title")
          .text(function (d: any) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });

      node = node
          .data(data.nodes)
          .enter().append("g");

      node.append("rect")
          .attr("x", function (d: any) { return d.x0; })
          .attr("y", function (d: any) { return d.y0; })
          .attr("height", function (d: any) { return d.y1 - d.y0; })
          .attr("width", function (d: any) { return d.x1 - d.x0; })
          .attr("fill", function (d: any) { return color(d.name.replace(/ .*/, "")); })
          .attr("stroke", "#000");

      node.append("text")
          .attr("x", function (d: any) { return d.x0 - 6; })
          .attr("y", function (d: any) { return (d.y1 + d.y0) / 2; })
          .attr("dy", "0.35em")
          .attr("text-anchor", "end")
          .text(function (d: any) { return d.name; })
          .filter(function (d: any) { return d.x0 < width / 2; })
          .attr("x", function (d: any) { return d.x1 + 6; })
          .attr("text-anchor", "start");

      node.append("title")
          .text(function (d: any) { return d.name + "\n" + format(d.value); });

    });
  }


}

interface SNodeExtra {
  nodeId: number;
  name: string;
}

interface SLinkExtra {
  source: number;
  target: number;
  value: number;
  uom: string;
}
type SNode = d3sankey.SankeyNode<SNodeExtra, SLinkExtra>;
type SLink = d3sankey.SankeyLink<SNodeExtra, SLinkExtra>;

interface DAG {
  nodes: SNode[];
  links: SLink[];
}