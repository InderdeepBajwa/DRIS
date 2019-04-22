import { Component, OnInit } from '@angular/core';
import { AuthServService } from '../auth-serv.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // User profile variable
  profile: any;

  constructor(public auth: AuthServService) { }

  ngOnInit() {
    // if (this.auth.userProfile) {
    //   this.profile = this.auth.userProfile;
    // } else {
    //   this.auth._getProfile((err, profile) => {
    //     this.profile = profile;
    //   });
    // }
  }

}
