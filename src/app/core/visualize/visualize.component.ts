import { Component, OnInit } from '@angular/core';
import { DataDriverService } from './data-driver.service';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})
export class VisualizeComponent implements OnInit {
  message: string;
  chartData = [];

  constructor(private receivedData: DataDriverService) {
   }

  ngOnInit() {
    this.receivedData.currentMessage.subscribe(message => this.message = message);
    var data = this.message.split('\n');
    var data2 = data.map((value) => value.split(', '));
    var jsonStr = JSON.stringify(data2);
    jsonStr = jsonStr.replace(/"v":"(\d+)"/g, '"v":$1').replace(/"f":"(\d+)"/g, '"f":$1');

    let data3 = JSON.parse(jsonStr);
    console.log(data3);
    this.chartData = data3;
  }

  // Drawing Sankey
  title = '';
  type = 'Sankey';
  data = this.chartData;
   columnNames = ['From', 'To','Weight'];
   color = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', 
        '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
  options = {
   height: 250,
   redrawTrigger: 0,
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
  width = 800;
  height = 800;

}
