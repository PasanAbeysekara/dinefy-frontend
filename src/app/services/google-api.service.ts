declare var google: any;
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, Subject } from 'rxjs';

export interface UserInfo {
  info: {
    sub: string //identifier to user
    email: string,
    name: string,
    picture: string
  }
}

@Injectable({
  providedIn: 'root'
})

export class GoogleApiService {

  userProfileSubject = new Subject<UserInfo>();

  constructor(private readonly oAuthService: OAuthService) {}

  initializeGoogleAuth(): Promise<void> {

      const oAuthConfig: AuthConfig = {
      // Url of the Identity Provider
      issuer: 'https://accounts.google.com',

      // strict discovery document disallows urls which not start with issuers url
      strictDiscoveryDocumentValidation: false,

      // URL of the SPA to redirect the user to after login
      redirectUri: window.location.origin,

      // The SPA's id. The SPA is registerd with this id at the auth-server
      // clientId: 'server.code',
      clientId: '550771484466-c6c6ufchc0l41a2k3aqecp8egfgk94ud.apps.googleusercontent.com',

      // set the scope for the permissions the client should request
      //scope: 'openid profile email https://www.googleapis.com/auth/gmail.readonly',

      scope: 'openid profile email'

      //showDebugInformation: true,

      };

      // confiure oauth2 service
      this.oAuthService.configure(oAuthConfig);

        // loading the discovery document from google, which contains all relevant URL for
        // the OAuth flow, e.g. login url
      return this.oAuthService.loadDiscoveryDocument().then( () => {
          // // This method just tries to parse the token(s) within the url when
          // // the auth-server redirects the user back to the web-app
          // // It doesn't send the user the the login page

          this.oAuthService.tryLoginImplicitFlow();

          // load user profile
          if (this.oAuthService.hasValidAccessToken()) {
              this.oAuthService.loadUserProfile().then( (userProfile) => {
              this.userProfileSubject.next(userProfile as UserInfo);
              //console.log(JSON.stringify(userProfile));
              })
          }
      })
  }

  signIn(): void {
        // redirect to google for login
        this.initializeGoogleAuth().then(() => {
          this.oAuthService.initLoginFlow();
        });
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  signOut() {
    this.oAuthService.logOut();
  }

}
