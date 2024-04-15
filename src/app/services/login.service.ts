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

  setToken(token: string): void{
    sessionStorage.setItem('token', token);
  }

  getToken(): string{
    return sessionStorage.getItem('token') as string;
  }

}
