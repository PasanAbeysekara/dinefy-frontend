import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject, throwError  } from 'rxjs';
import { tap, catchError, exhaustMap, take } from 'rxjs/operators';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { LoginService } from "./login.service";
import {jwtDecode} from 'jwt-decode';
import {JwtHelperService} from "@auth0/angular-jwt";
import { Router } from '@angular/router';


export interface UserInfo {
  info: {
    sub: string,
    email: string,
    name: string,
    firstName: string;
    lastName: string;
    picture: string
  }
}

export interface UserDto {
  username: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:8081/data';
  //private userInfoSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  public token = new BehaviorSubject<String | null>(null);
  tokenExpirationTimer: any;

  private userInfoSubject = new BehaviorSubject<any>(null);
  userInfo$: Observable<any> = this.userInfoSubject.asObservable();
  jwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {}

  setUserInfo(userInfo: any): void {
    this.userInfoSubject.next(userInfo);
    this.token.next(userInfo.info.token);
    console.log("userInfoSubject set with:", userInfo);
  }

  async setUserInfoFromToken(){
  this.token.pipe(
      take(1),
      exhaustMap(token => {

        const periodCount = (token?.match(/\./g) || []).length;
        if (!token) {
          console.log('Not logged in');
          return this.userInfoSubject.asObservable();
        }
        else if(periodCount==2){
          const decodedToken = this.jwtHelperService.decodeToken(token.toString());

          if (!decodedToken) {
            console.error('Error decoding token');
            return this.userInfoSubject.asObservable();
          }
  
          const userInfo = {
            info: {
              sub:'',
              email: decodedToken.sub,
              name: `${decodedToken.firstName} ${decodedToken.lastName}`,
              firstName: decodedToken.firstName,
              lastName: decodedToken.lastName,
              picture: '',
            },
          };
  
  
          this.setUserInfo(userInfo);
  
          return of(userInfo);
        }
        else{
          console.log('Google logged in');
          return this.userInfoSubject.asObservable();
        }
       
      })

    ).subscribe()

  }

  login(username: string, password: string): Observable<any | null> {
      const credentialsDto = { username, password };
      return this.http.post<any>(this.apiUrl + '/login', credentialsDto).pipe(
        tap(response => {
          if (response.accessToken) {
            console.log("------------------");
            this.token.next(response.accessToken);
            const decodedAccessToken = this.jwtHelperService.decodeToken(response.accessToken);
            this.autoLogout(this.getExpirationDate(decodedAccessToken.exp).valueOf() - new Date().valueOf())
            localStorage.setItem('accessToken', response.accessToken);
            this.loginService.setIsLogged(true);
            //window.location.reload();
          }
        }),
        catchError(error => {
          console.error('Error During Login:', error);
          return of(null);
        })
      );
  }

  autoLogin() {
    const token: string | null = localStorage.getItem('accessToken');
    if (!token) return;
    this.token.next(token);
    console.log("autologged "+token);
    const periodCount = (token?.match(/\./g) || []).length;
    if(periodCount==2){
      const decodedAccessToken = this.jwtHelperService.decodeToken(token);
      this.autoLogout(this.getExpirationDate(decodedAccessToken.exp).valueOf() - new Date().valueOf());
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration)
  }

  getExpirationDate(exp: number) {
    const date = new Date(0);
    date.setUTCSeconds(exp)
    return date;
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.userInfoSubject.next(null);
    this.router.navigate(['/'])
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }


 register(firstName: string, lastName: string, username: string, password: string): Observable<any> {
    const userData = { firstName, lastName, username: username, password };
    return this.http.post<any>(`${this.apiUrl}/register`, userData,{responseType: 'text' as 'json'}).pipe(
      tap(response => {
        if (response === "User registered successfully!") {
          this.login(username,password).subscribe(
            (response) => {
               //this.loginService.setIsLogged(true);
            },
            (error) => {
              console.error('Login error:', error.message);
            }
         // this.loginService.setIsLogged(true);
      )}
      }),
      catchError(error => {
        if (error.status === 400 && error.error === 'Username already exists') {
          return of('Username already exists');
        } else{
          console.error('Registration error:', error);
          return of(error.error);
        }
     })
    );
    
  }

    signInWithFacebook(): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/facebook`, {}).pipe(
        catchError(error => {
          console.error('Facebook sign-in error:', error);
          return of(null);
        })
      );
    }


  getUserDto(): Observable<UserDto | null> {
        return this.http.get<UserDto>(`${this.apiUrl}/decode`,{responseType: 'text' as 'json'}).pipe(
          catchError(error => {
            console.error('Error fetching UserDto:', error);
            return of(null);
          })
        );
      }

}
