import { Component, OnInit, Output } from '@angular/core';

import { GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public getData(data:string) {
    var data2 = data.split('\n');
    var data3 = data2.map((value) => value.split(','));
    // data3 contains sufficient data
  }

}
