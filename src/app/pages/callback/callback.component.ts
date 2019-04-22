import { Component, OnInit } from '@angular/core';
import { AuthServService } from 'src/app/core/auth/auth-serv.service';


@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthServService) {
    auth.handleAuthentication();
   }

  ngOnInit() {
  }

}
