import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataDriverService {

  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  private colorSource = new BehaviorSubject<string>("domain,range");
  currentColor = this.colorSource.asObservable();

  constructor() { }

  changeMessage(message: string, color: string) {
    this.messageSource.next(message);
    this.colorSource.next(color);
  } 
}
