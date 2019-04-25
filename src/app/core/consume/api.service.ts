import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { AuthServService } from './../auth/auth-serv.service';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ENV } from './../env.config';
import { VisualizationModel } from './../dbase/server/visualization.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private auth: AuthServService
  ) { }

  private get _authHeader(): string {
    return `Bearer ${this.auth.accessToken}`;
  }

  postVisual$(visual: VisualizationModel): Observable<VisualizationModel> {
    console.log(<VisualizationModel>(visual));
    return this.http
        .post<VisualizationModel>(`${ENV.BASE_API}save`, visual)
        .pipe(catchError((error) => this._handleError(error))
    );
  }

  // Get list of all visualizations
  getVisualizations$(): Observable<VisualizationModel[]> {
    return this.http
      .get<VisualizationModel[]>(`${ENV.BASE_API}myVisual/`,
          { headers: new HttpHeaders().set('Authorization', this._authHeader)})
      .pipe(
        catchError((error) => this._handleError(error))
    );
  }

  // Get list of current user's visualizations
  getMyVisualizations$(): Observable<VisualizationModel[]> {
    return this.http
      .get<VisualizationModel[]>(`${ENV.BASE_API}myvisual`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
    );
  }

  public _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    return ObservableThrowError(errorMsg);
  }

}