import { Component, OnInit } from '@angular/core';
import { DataDriverService } from '../../data-driver.service';

@Component({
  selector: 'app-prevchart',
  templateUrl: './prevchart.component.html',
  styleUrls: ['./prevchart.component.scss']
})
export class PrevchartComponent implements OnInit {

  message:string = "From, To, 1";
  
  constructor(private receivedData: DataDriverService) { }
  
  ngOnInit() {
    this.receivedData.currentMessage.subscribe(message => this.message = message);
  }
}