import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataDriverService } from '../data-driver.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  message: string;

  constructor(private data: DataDriverService, private router: Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  newMessage(chartData: string) {
    this.data.changeMessage(chartData);
  }

  visualize(chartData: string) {
    this.data.changeMessage(chartData);
    this.router.navigate(['visualize']);

  }

  public getData(data:string) {
    var data2 = data.split('\n');
    var data3 = data2.map((value) => value.split(','));
    // data3 contains sufficient data
  }

}
