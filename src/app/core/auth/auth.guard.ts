import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServService } from './auth-serv.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthServService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.auth.loggedIn) {
      localStorage.setItem('authRedirect', state.url);
    }
    if (!this.auth.tokenValid && !this.auth.loggedIn) {
      this.auth.login()
      return false;
    }
    if (this.auth.tokenValid && this.auth.loggedIn) {
      return true;
    }
  }
  
}
