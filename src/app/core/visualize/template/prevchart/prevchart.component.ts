import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Sankey from 'd3-sankey';
import { DataDriverService } from '../../data-driver.service';
import { GoogleChartComponent, GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-prevchart',
  templateUrl: './prevchart.component.html',
  styleUrls: ['./prevchart.component.scss']
})
export class PrevchartComponent implements OnInit {

  message:string = "From, To, 1";
  previousMessage:string = "From, To, 1";
  
  constructor(private receivedData: DataDriverService) { }
  
  ngOnInit() {
    this.receivedData.currentMessage.subscribe(message => this.onChangeMessage(message));
    google.charts.setOnLoadCallback(this.drawChart());
    // data3 contains sufficient data
  }

  chartData = [
    ["From", "To", 3],
    ["From", "Towards", 1]
  ];
  
  drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();   
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');

    data.addRows([
       [ 'Brazil', 'Portugal', 5 ],
       [ 'Brazil', 'France', 1 ],
       [ 'Brazil', 'Spain', 1 ],
       [ 'Brazil', 'England', 1 ],
       
       [ 'Canada', 'Portugal', 1 ],
       [ 'Canada', 'France', 5 ],
       [ 'Canada', 'England', 1 ],
       
       [ 'Mexico', 'Portugal', 1 ],
       [ 'Mexico', 'France', 1 ],
       [ 'Mexico', 'Spain', 5 ],
       [ 'Mexico', 'England', 1 ],
       
       [ 'USA', 'Portugal', 1 ],
       [ 'USA', 'France', 1 ],
       [ 'USA', 'Spain', 1 ],
       [ 'USA', 'England', 5 ],
       
       [ 'Portugal', 'Angola', 2 ],
       [ 'Portugal', 'Senegal', 1 ],
       [ 'Portugal', 'Morocco', 1 ],
       [ 'Portugal', 'South Africa', 3 ],
       
       [ 'France', 'Angola', 1 ],
       [ 'France', 'Senegal', 3 ],
       [ 'France', 'Mali', 3 ],
       [ 'France', 'Morocco', 3 ],
       [ 'France', 'South Africa', 1 ],
       
       [ 'Spain', 'Senegal', 1 ],
       [ 'Spain', 'Morocco', 3 ],
       [ 'Spain', 'South Africa', 1 ],
       
       [ 'England', 'Angola', 1 ],
       [ 'England', 'Senegal', 1 ],
       [ 'England', 'Morocco', 2 ],
       [ 'England', 'South Africa', 7 ],
       
       [ 'South Africa', 'China', 5 ],
       [ 'South Africa', 'India', 1 ],
       [ 'South Africa', 'Japan', 3 ],
       
       [ 'Angola', 'China', 5 ],
       [ 'Angola', 'India', 1 ],
       [ 'Angola', 'Japan', 3 ],
       
       [ 'Senegal', 'China', 5 ],
       [ 'Senegal', 'India', 1 ],
       [ 'Senegal', 'Japan', 3 ],
       
       [ 'Mali', 'China', 5 ],
       [ 'Mali', 'India', 1 ],
       [ 'Mali', 'Japan', 3 ],
       
       [ 'Morocco', 'China', 5 ],
       [ 'Morocco', 'India', 1 ],
       [ 'Morocco', 'Japan', 3 ]
    ]);	

    // Set chart options
    var options = {width: 550};
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.Sankey(document.getElementById('container'));
    console.log("THING " + chart);
    chart.draw(data, options);
 }
 
 


  public onChangeMessage(cData: string) {
    // console.log(this.options.height);
    this.message = cData;
    if(this.message !== this.previousMessage) {
      // console.log(this.chartData);
      // var data2 = this.message.split('\n');
      // this.chartData = data2.map((value) => value.split(','));
      // console.log(this.chartData);
      // this.data = this.chartData;
      // this.options.height = 100;
      // console.log(this.options.height);
      this.previousMessage = this.message;

      this.receivedData.currentMessage.subscribe(message => this.message = message);
      var data = this.message.split('\n');
      let data2 = data.map((value) => value.split(', '));
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
      this.data = this.chartData;
    }
  }

  

  // To manage the size of preview (yet to implement)
  public increaseSize() {
    this.width = 400;
    this.height = 1000;
  }

  public decreaseSize() {
    this.width = 270;
    this.height = 400;
  }

  // public getData(data:string) {
  //   console.log(data);

  //   var data2 = data.split('\n');
  //   var data3 = data2.map((value) => value.split(','));
  //   console.log(data3);
  // }
}