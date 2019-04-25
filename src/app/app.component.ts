import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation] // Page transition animation
})
export class AppComponent implements OnInit {
  title = 'DRIS';

  constructor() {
  }

  ngOnInit() {
  }
}
