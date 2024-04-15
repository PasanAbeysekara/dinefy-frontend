import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = environment.apiResUrl;

  httpClient = inject(HttpClient);
  protected reservationList:Observable<any> = this.httpClient.get(`${this.baseUrl}/reservations`);

  protected reservation:any;
  constructor() { }

  getAllProducts(): Observable<any>{
    return this.reservationList;
  }

  getProductById(id:Number):any{
    this.reservation = this.httpClient.get(`${this.baseUrl}/reservations/${id}`);
    return this.reservation;
  }

  getProductByCode(reserveCode:string):any{
    this.reservation = this.httpClient.get(`${this.baseUrl}/reservations/code/${reserveCode}`);
    return this.reservation;
  }
}
