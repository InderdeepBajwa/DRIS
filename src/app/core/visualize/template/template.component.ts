import { Component, OnInit } from '@angular/core';
import * as d3array from 'd3-array';
import * as d3collect from 'd3-collection';
import * as d3path from 'd3-path';
import * as d3shape from 'd3-shape';
import * as d3Sankey from 'd3-sankey';
import * as d3 from 'd3';
import { saveSvgAsPng } from 'save-svg-as-png';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.drawChart();
  }

  public drawChart() {
      
    var data = d3.json("https://gist.githubusercontent.com/mbostock/ca9a0bb7ba204d12974bca90acc507c0/raw/398136b7db83d7d7fd89181b080924eb76041692/energy.json")

    console.log(data);

    

  }
}
