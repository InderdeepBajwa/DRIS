import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})
export class VisualizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawGChart);

function drawGChart() {
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

