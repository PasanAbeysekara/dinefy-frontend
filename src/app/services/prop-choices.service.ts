import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PropChoicesService {

  private baseUrl = environment.apiDataUrl;
  httpClient = inject(HttpClient);
  protected propChoicesList:Observable<any> = this.httpClient.get(`${this.baseUrl}/menus`);

  constructor() { }

  getAllPropChoices(){
    return this.httpClient.get(`${this.baseUrl}/prop-choices`)
  }

  getPropChoicesByProperty(propId:number){
    return this.httpClient.get(`${this.baseUrl}/prop-choices/by-property/${propId}`)
  }

}
