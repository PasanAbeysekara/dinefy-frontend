import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = environment.apiResUrl;
  constructor(private http: HttpClient) {}

  getMaxOrderIds(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/orders/maxIds`);
  }

  saveOrder(order: Order): void {
       this.http.post<any>(`${this.apiUrl}/orders`, order)
      .subscribe(response => {
        console.log('Orders saved successfully:', response);
        sessionStorage.removeItem('cartItems');
      }, error => {
        console.error('Error saving orders:', error);
      });
  }
}
