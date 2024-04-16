import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {exhaustMap,  take} from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

   return authService.token.pipe(take(1), exhaustMap(token => {
    if (!token) {
      return next(req);
    }
    if (req.url.startsWith('https://accounts.google.com/')) {
      return next(req);
    }

    const modifiedRequest = req.clone({setHeaders: {
      Authorization: `Bearer ${token}`
    }});
    return next(modifiedRequest);
  }))

};
