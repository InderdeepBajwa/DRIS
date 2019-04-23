import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // @ts-ignore
    new Vivus('canvas', {start: 'autostart', type: 'delayed', duration: 150, animTimingFunction: Vivus.EASE}, function(car){
      setTimeout(function(){ car.reset().play(); }, 3000);
    });
  }
  
}
