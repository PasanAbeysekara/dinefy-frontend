import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PropChoicesService {

  private baseUrl = environment.apiDataUrl;
  httpClient = inject(HttpClient);
  private headers = new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem('token')}`});
  protected propChoicesList:Observable<any> = this.httpClient.get(`${this.baseUrl}/menus`,{headers: this.headers});

  constructor() { }

  getAllPropChoices(){
    return this.httpClient.get(`${this.baseUrl}/prop-choices`,{headers: this.headers});
  }

  getPropChoicesByProperty(propId:number){
    return this.httpClient.get(`${this.baseUrl}/prop-choices/by-property/${propId}`,{headers: this.headers});
  }

}
