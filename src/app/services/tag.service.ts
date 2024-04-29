import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private baseUrl = environment.apiDataUrl;
  httpClient = inject(HttpClient);
  //private headers = new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem('token')}`});
  protected tagsList:Observable<any> = this.httpClient.get(`${this.baseUrl}/tags`);
  protected tag:any;

  constructor() { }

  getAllTags():Observable<any>{
    return this.tagsList;
  }
}
