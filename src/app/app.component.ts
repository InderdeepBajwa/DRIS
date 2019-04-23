import { Component, OnInit } from '@angular/core';
import { AuthServService } from './core/auth/auth-serv.service';
import { fadeAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation] // Page transition animation
})
export class AppComponent implements OnInit {
  title = 'DRIS';

  constructor(public auth: AuthServService) {
    auth.handleAuth();
  }

  ngOnInit() {
    if (this.auth.loggedIn) {
      this.auth.renewToken();
    }
  }
}
