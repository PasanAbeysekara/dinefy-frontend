import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private baseUrl = environment.apiDataUrl;
  httpClient = inject(HttpClient);
  //private headers = new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem('token')}`});
  protected facilityList:Observable<any> = this.httpClient.get(`${this.baseUrl}/facilities`);
  protected menu:any;

  constructor() { }

  getAllFacilities():Observable<any>{
    return this.facilityList;
  }

}
