import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = environment.apiDataUrl;
  httpClient = inject(HttpClient);
  //private headers = new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem('token')}`});
  protected locationsList:Observable<any> = this.httpClient.get(`${this.baseUrl}/locations`);
  locId:any;

  constructor() { }

  getAllLocations():Observable<any>{
    return this.locationsList;
  }

  getLocationIdByName(cityName: string): Observable<any> {
    return this.locationsList.pipe(
      map(locations => {
        const location = locations.data.content.find((location: any) => location.name === cityName);
        return location ? location.locationId : null;
      })
    );
  }

}
