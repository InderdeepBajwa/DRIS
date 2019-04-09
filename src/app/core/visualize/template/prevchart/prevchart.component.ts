import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Sankey from 'd3-sankey';

@Component({
  selector: 'app-prevchart',
  templateUrl: './prevchart.component.html',
  styleUrls: ['./prevchart.component.scss']
})
export class PrevchartComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

  title = '';
  type = 'Sankey';
  data = [
     ["Brazil","Portugal",5],
     ["Brazil","France",1],
     ["Brazil","Spain",1],
     ["Brazil","England",1],
     ["Canada","Portugal",1],
     ["Canada","France",5],
     ["Canada","England",1],
     ["Mexico","Portugal",1], 
     ["Mexico","France",1],
     ["Mexico","Spain",5],
     ["Mexico","England",1], 
     ["USA","Portugal",1], 
     ["USA","France",1],
     ["USA","Spain",1],
     ["USA","England",5],
     ["Portugal","Angola",2], 
     ["Portugal","Senagal",1],
     ["Portugal","Morocco",1],
     ["Portugal","South Africa",3]
   ];
   columnNames = ['From', 'To','Weight'];
   color = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', 
        '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
  options = {
   height: 250,
   sankey: {
     node: {
       colors: this.color
     },
     link: {
       colorMode: 'gradient',
       colors: this.color
     }
   }
 };
  width = 270;
  height = 400;

  // To manage the size of preview (yet to implement)
  public increaseSize() {
    this.width = 400;
    this.height = 1000;
  }

  public decreaseSize() {
    this.width = 270;
    this.height = 400;
  }

  public getData(data:string) {
    console.log(data);

    var data2 = data.split('\n');
    var data3 = data2.map((value) => value.split(','));
    console.log(data3);
  }
}