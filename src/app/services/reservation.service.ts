import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = environment.apiResUrl;
  //private headers = new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem('token')}`});
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
    return this.httpClient.get(`${this.baseUrl}/reservations/code/${reserveCode}`);
  }

  postReservation(reservationPayload:any):any{
    this.httpClient.post(`http://${environment.host}:8081/res/reservations`,reservationPayload)
  }

}
