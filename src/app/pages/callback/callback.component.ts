import { Component, OnInit } from '@angular/core';
import { AuthServService } from './../../core/auth/auth-serv.service';


@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthServService) {
    auth.handleAuth();
   }

  ngOnInit() {
  }

}
