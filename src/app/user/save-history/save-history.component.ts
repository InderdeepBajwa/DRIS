import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../core/consume/api.service';
import { Subscription } from 'rxjs';
import { VisualizationModel } from './../../core/dbase/server/visualization.model';
import { Title } from '@angular/platform-browser';
import { AuthServService } from './../../core/auth/auth-serv.service';

@Component({
  selector: 'app-save-history',
  templateUrl: './save-history.component.html',
  styleUrls: ['./save-history.component.scss']
})
export class SaveHistoryComponent implements OnInit {

  VisualizationListSub: Subscription;
  visualizationsList: VisualizationModel[];
  error: boolean;

  constructor(
    private title: Title,
    private api: ApiService,
    private auth: AuthServService
  ) { }

  ngOnInit() {
    this.title.setTitle("Previous Visualizations");
    this._getSaveList();
  }

  private _getSaveList() {
    // Get visualizations
    if (!this.auth.loggedIn) {
      console.log("Error: Not logged in")
      return;
    }
    this.VisualizationListSub = this.api
      .getVisualizations$()
      .subscribe(
        res => {
          this.visualizationsList = res;
        },
        err => {
          this.error = true;
        }
      );
  }

}
