import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Sankey from 'd3-sankey';
import { DataDriverService } from '../../data-driver.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
    
    // data3 contains sufficient data
  }

  chartData = [
    ["From", "To", 3],
    ["From", "Towards", 1]
  ];
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
  width = 270;
  height = 400;


  public onChangeMessage(cData: string) {
    // console.log(this.options.height);
    this.message = cData;
    // if(this.message !== this.previousMessage) {
    //   console.log(this.chartData);
    //   var data2 = this.message.split('\n');
    //   this.chartData = data2.map((value) => value.split(','));
    //   console.log(this.chartData);
    //   this.data = this.chartData;
    //   this.options.height = 100;
    //   console.log(this.options.height);
    //   this.previousMessage = this.message;
    // }
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