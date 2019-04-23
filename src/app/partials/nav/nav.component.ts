import { Component, OnInit } from '@angular/core';
import { AuthServService } from './../../core/auth/auth-serv.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = "DRIS";

  constructor(public auth: AuthServService) { }

  ngOnInit() {
    
  }

}
