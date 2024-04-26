import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {exhaustMap,  take} from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("Interceptor triggered for request:", req.url);
  const authService = inject(AuthService);
  authService.autoLogin();
   return authService.token.pipe(take(1), exhaustMap(token => {
    if (!token) {
      console.log("no token:", req.url);
      return next(req);
      
    }
    if (req.url.startsWith('https://accounts.google.com/')) {
      console.log("google:", req.url);
      return next(req);
    }

    const modifiedRequest = req.clone({setHeaders: {
      Authorization: `Bearer ${token}`
    }});
    console.log("TOKEN!!! : ",token);
    return next(modifiedRequest);
  }))

};
