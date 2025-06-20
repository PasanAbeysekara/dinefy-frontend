import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseUrl = environment.apiDataUrl;
  httpClient = inject(HttpClient);
  //private headers = new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem('token')}`});
  protected menuList:Observable<any> = this.httpClient.get(`${this.baseUrl}/menus`);
  protected menu:any;

  constructor() { }

  getAllMenus():Observable<any>{
    return this.menuList;
  }

}
