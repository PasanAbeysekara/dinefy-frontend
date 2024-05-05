import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {authInterceptor} from './interceptors/auth.interceptor'
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient , withInterceptors, withInterceptorsFromDi} from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import {MessageService} from "primeng/api";

export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes),
  provideAnimations(),
   provideHttpClient(
    withInterceptors([authInterceptor]),
  ),
  provideOAuthClient(),
  HttpClientModule,
    MessageService
  ]
};
