import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AUTH_CONFIG } from './auth.config';
import * as auth0 from 'auth0-js';
import { ENV } from './../env.config';

@Injectable()
export class AuthServService {
  // Create Auth0 web auth instance
  private _auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.CLIENT_ID,
    domain: AUTH_CONFIG.CLIENT_DOMAIN,
    responseType: 'token',
    redirectUri: AUTH_CONFIG.REDIRECT,
    audience: AUTH_CONFIG.AUDIENCE,
    scope: AUTH_CONFIG.SCOPE
  });
  accessToken: string;
  userProfile: any;
  expiresAt: number;
  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
  loggingIn: boolean;
  // Subscribe to token expiration stream
  refreshSub: Subscription;
  routeSub: Subscription;

  constructor(private router: Router) {
    // If app auth token is not expired, request new token
    if (JSON.parse(localStorage.getItem('expires_at')) > new Date()) {
      this.renewToken();
    }
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  login() {
    // Auth0 authorize request
    this._auth0.authorize();
  }

  handleAuth() {
    // When Auth0 hash parsed, get profile
    console.log("CHECKING");
    this._auth0.parseHash((err, authResult) => {
      console.log("PARSING HASH")
      if (authResult && authResult.accessToken) {
        console.log("ACCESS TOKEN FOUND")
        window.location.hash = '';
        this._getProfile(authResult);
      } else if (err) {
        console.log("ACCESS TOKEN NOT FOUND")
        this._clearRedirect();
        this.router.navigate(['/']);
        console.error(`Error authenticating: ${err.error}`);
      }
      this.router.navigate(['/new']);
    });
  }

  private _getProfile(authResult) {
    this.loggingIn = true;
    // Use access token to retrieve user's profile and set session
    this._auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this._setSession(authResult, profile);
        this._redirect();
      } else if (err) {
        console.warn(`Error retrieving profile: ${err.error}`);
      }
    });
  }

  private _setSession(authResult, profile?) {
    this.expiresAt = (authResult.expiresIn * 1000) + Date.now();
    // Store expiration in local storage to access in constructor
    localStorage.setItem('expires_at', JSON.stringify(this.expiresAt));
    this.accessToken = authResult.accessToken;
    this.userProfile = profile;
    // Update login status in loggedIn$ stream
    this.setLoggedIn(true);
    this.loggingIn = false;
    // Schedule access token renewal
    this.scheduleRenewal();
  }

  private _redirect() {
    const redirect = decodeURI(localStorage.getItem('authRedirect'));
    const navArr = [redirect || '/'];

    this.router.navigate(navArr);

    // Redirection completed; clearing redirect from storage
    this._clearRedirect();
  }

  private _clearRedirect() {
    // Remove redirect from localStorage
    localStorage.removeItem('authRedirect');
  }

  private _clearExpiration() {
    // Remove token expiration from localStorage
    localStorage.removeItem('expires_at');
  }

  logout() {
    // Remove data from localStorage
    this._clearExpiration();
    this._clearRedirect();
    // End Auth0 authentication session
    this._auth0.logout({
      clientId: AUTH_CONFIG.CLIENT_ID,
      returnTo: ENV.BASE_URI
    });
  }

  get tokenValid(): boolean {
    // Check if current time is past access token's expiration
    return Date.now() < JSON.parse(localStorage.getItem('expires_at'));
  }

  renewToken() {
    // Check for valid Auth0 session\
    this._auth0.checkSession({}, (err, authResult) => {
      console.log(err, authResult)
      if (authResult && authResult.accessToken) {
        console.log("CHECKING FOR RENEW TOKEN")
        this._getProfile(authResult);
      } else {
        this._clearExpiration();
      }
    });
  }

  scheduleRenewal() {
    // If last token is expired, do nothing
    if (!this.tokenValid) { return; }
    // Unsubscribe from previous expiration observable
    this.unscheduleRenewal();
    // Create and subscribe to expiration observable
    const expiresIn$ = of(this.expiresAt).pipe(
      mergeMap(
        expires => {
          const now = Date.now();
          // Use timer to track delay until expiration
          // to run the refresh at the proper time
          return timer(Math.max(1, expires - now));
        }
      )
    );

    this.refreshSub = expiresIn$
      .subscribe(
        () => {
          this.renewToken();
          this.scheduleRenewal();
        }
      );
  }

  unscheduleRenewal() {
    if (this.refreshSub) {
      this.refreshSub.unsubscribe();
    }
  }

}