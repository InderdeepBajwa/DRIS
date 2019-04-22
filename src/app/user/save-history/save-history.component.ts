import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../core/consume/api.service';
import { Subscription } from 'rxjs';
import { VisualizationModel } from './../../core/dbase/server/visualization.model';
import { Title } from '@angular/platform-browser';

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
    private api: ApiService
  ) { }

  ngOnInit() {
    this.title.setTitle("Previous Visualizations");
    this._getEventList();
  }

  private _getEventList() {
    // Get visualizations
    this.VisualizationListSub = this.api
      .getVisualizations$()
      .subscribe(
        res => {
          this.visualizationsList = res;
        },
        err => {
          console.error(err);
          this.error = true;
        }
      );
  }

}
