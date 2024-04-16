import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  
  constructor() {
  }

  setIsLogged(isLoggedIn: boolean): void{
    sessionStorage.setItem('isLoggedIn', isLoggedIn.toString());
    this.isLoggedInSubject.next(isLoggedIn);
  }

  getIsLoggedIn(): boolean{
    return sessionStorage.getItem('isLoggedIn') == 'true' ? true : false;
  }

  setToken(token:any): void{
    sessionStorage.setItem('token', token.accessToken);
  }

  getToken(): string{
    console.log(sessionStorage);
    return sessionStorage.getItem('token') as string;
  }

}
