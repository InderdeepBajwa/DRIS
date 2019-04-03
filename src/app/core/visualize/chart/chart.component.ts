import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3sankey from 'd3-sankey';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}


google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawGChart);

function drawGChart() {
   document.getElementById('#form').innerHTML="";
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'From');
  data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  data.addRows([
    [ 'Tomato', 'Potatoe', 5 ],
    [ 'Tomato', 'Pomato', 7 ],
    [ 'Tomato', 'Onion', 6 ],
    [ 'Carrot', 'Potatoe', 2 ],
    [ 'Carrot', 'Pomato', 9 ],
    [ 'Carrot', 'Onion', 4 ]
  ]);

  // Sets chart options.
  var options = {
    width: 600,
  };

  // Instantiates and draws our chart, passing in some options.
  var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
  chart.draw(data, options);
}



