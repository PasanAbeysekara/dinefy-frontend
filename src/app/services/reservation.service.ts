import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  httpClient = inject(HttpClient);
  protected reservationList:Observable<any> = this.httpClient.get('http://localhost:8081/res/reservations');

  protected reservation:any;
  constructor() { }

  getAllProducts(): Observable<any>{
    return this.reservationList;
  }

  getProductById(id:Number):any{
    this.reservation = this.httpClient.get(`http://localhost:8081/res/reservations/${id}`);
    return this.reservation;
  }

  getProductByCode(reserveCode:string):any{
    this.reservation = this.httpClient.get(`http://localhost:8081/res/reservations/code/${reserveCode}`);
    return this.reservation;
  }
}
