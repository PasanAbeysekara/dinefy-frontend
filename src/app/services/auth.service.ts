import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:8081/data';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string | null> {
      const credentialsDto = { username, password };
      return this.http.post<any>(this.apiUrl + '/login', credentialsDto).pipe(
        catchError(error => {
          console.error('Error During Login:', error);
          return of(null);
        })
      );
  }

 register(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    const userData = { firstName, lastName, email, password };
    return this.http.post<any>(`${this.apiUrl}/register`, userData).pipe(
      catchError(error => {
        console.error('Error during user registration:', error);
        return of(null);
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

}
