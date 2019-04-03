import { Component, OnInit } from '@angular/core';
import * as d3array from 'd3-array';
import * as d3collect from 'd3-collection';
import * as d3path from 'd3-path';
import * as d3shape from 'd3-shape';
import * as d3Sankey from 'd3-sankey';
import * as d3 from 'd3';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  // ngOnInit() {
  // }

  width = 975;
  height = 600;

  
  data = d3.json("https://gist.githubusercontent.com/mbostock/ca9a0bb7ba204d12974bca90acc507c0/raw/398136b7db83d7d7fd89181b080924eb76041692/energy.json");
  
  ngOnInit(): void {
    this.DrawChart();
}

private DrawChart() {

    var svg = d3.select("#sankey"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    var formatNumber = d3.format(",.0f"),
        format = function (d: any) { return formatNumber(d) + " TWh"; },
        color = d3.scaleOrdinal(d3.schemeCategory10);

    var sankey = d3Sankey.sankey()
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

    //d3.json("./energy.json", function (error, energy: any) {
        //if (error) throw error;

    const energy: DAG = {
        nodes: [{
            nodeId: 0,
            name: "node0"
        }, {
            nodeId: 1,
            name: "node1"
        }, {
            nodeId: 2,
            name: "node2"
        }, {
            nodeId: 3,
            name: "node3"
        }, {
            nodeId: 4,
            name: "node4"
        }],
        links: [{
            source: 0,
            target: 2,
            value: 2,
            uom: 'Widget(s)'
        }, {
            source: 1,
            target: 2,
            value: 2,
            uom: 'Widget(s)'
        }, {
            source: 1,
            target: 3,
            value: 2,
            uom: 'Widget(s)'
        }, {
            source: 0,
            target: 4,
            value: 2,
            uom: 'Widget(s)'
        }, {
            source: 2,
            target: 3,
            value: 2,
            uom: 'Widget(s)'
        }, {
            source: 2,
            target: 4,
            value: 2,
            uom: 'Widget(s)'
        }, {
            source: 3,
            target: 4,
            value: 4,
            uom: 'Widget(s)'
        }]
    };


        sankey(energy);

        link = link
            .data(energy.links)
            .enter().append("path")
            .attr("d", d3Sankey.sankeyLinkHorizontal())
            .attr("stroke-width", function (d: any) { return Math.max(1, d.width); });

        link.append("title")
            .text(function (d: any) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });

        node = node
            .data(energy.nodes)
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
    //});
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
type SNode = d3Sankey.SankeyNode<SNodeExtra, SLinkExtra>;
type SLink = d3Sankey.SankeyLink<SNodeExtra, SLinkExtra>;

interface DAG {
    nodes: SNode[];
    links: SLink[];
}