import { Component, OnInit } from '@angular/core';
import { DataDriverService } from './data-driver.service';
import {} from 'angular-google-charts';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})
export class VisualizeComponent implements OnInit {
  message: string;
  chartData: (string | number)[][] = [["___", "_______", 0.0]];
  
  
  width = 1200;
  height = 600;

  constructor(private receivedData: DataDriverService) {
   }

  ngOnInit() {
    this.receivedData.currentMessage.subscribe(message => this.message = message);
    var data = this.message.split('\n');
    var data2 = data.map((value) => value.split(', '));
    var jsonStr = JSON.stringify(data2);
    console.log(jsonStr);
    jsonStr = jsonStr.replace(/"v":"(\d+)"/g, '"v":$1').replace(/"f":"(\d+)"/g, '+"f":$1');

    let data3 = JSON.parse(jsonStr);
    for (var i = 0; i < data3.length; i++) {
      if (isNaN(data3[i])) {
        this.chartData.push(data3[i]);
      } else {
        // @ts-ignore
        this.chartData.push(+data3[i]);
      }
    }

    // Calculating totals
    var sourceTotals = {};

    for (var i = 0; i < this.chartData.length; i++) {
        var item = this.chartData[i],
            key = item[0];
        if (sourceTotals.hasOwnProperty(key)) {
            sourceTotals[key] += (+item[2]);
        }
        else {
            sourceTotals[key] = (+item[2]);
        }
    }

    var destTotals = {};

    for (var i = 0; i < this.chartData.length; i++) {
        var item = this.chartData[i],
            key = item[1];
        if (destTotals.hasOwnProperty(key)) {
            destTotals[key] += item[2];
        }
        else {
            destTotals[key] = item[2];
        }
    }
    this.chartData.forEach( function(d) {
      d[0] = d[0] + " [" + sourceTotals[d[0]] + "]";
      d[1] = d[1] + " [" + destTotals[d[1]] + "]";
    })
    //this.chartData = data3;
  }

  // Drawing Sankey
  title = '';
  type = 'Sankey';
  data = this.chartData;
  columnNames = ['From', 'To','Weight'];
  color = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', 
      '#cab2d6', '#ffff99', '#1f78b4', '#33a02c',
      '#36cfe3', '#beafea', '#eb9a19', '#0dff6f', 
      '#c3b2a6', '#f2af29', '#a578a4', '#baa02c'];

  options = {
    
   height: this.height,
   sankey: {
     node: {
        interactivity: true,
        colors: this.color
      },
      link: {
        colorMode: 'gradient',
        colors: this.color
      }
   }
 };

  // Save Image Function
  

}
