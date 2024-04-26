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
    console.log("Hi");
    sessionStorage.setItem('isLoggedIn', isLoggedIn.toString());
    this.isLoggedInSubject.next(isLoggedIn);
  }

  getIsLoggedIn(): boolean{
    return sessionStorage.getItem('isLoggedIn') == 'true' ? true : false;
  }
  
/*
  setToken(token:any): void{
    console.log("Pi");
    //sessionStorage.setItem('token', token);
  }

  getToken(): string{
    console.log(sessionStorage);
    return sessionStorage.getItem('token') as string;
  }
*/
}
