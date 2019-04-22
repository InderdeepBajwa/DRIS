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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  postVisual$(visual: VisualizationModel): Observable<VisualizationModel> {
    console.log(<VisualizationModel>(visual));
    return this.http
        .post<VisualizationModel>("https://postman-echo.com/post", visual, this.httpOptions)
        .pipe(catchError((error) => this._handleError(error))
    );
  }

  // Get list of all visualizations
  getVisualizations$(): Observable<VisualizationModel[]> {
    return this.http
      .get<VisualizationModel[]>(`http://localhost:8083/api/visualizations/`)
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