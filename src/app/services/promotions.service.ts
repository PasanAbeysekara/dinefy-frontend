import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Promotion } from '../models/api/productInfoModel';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  private baseUrl = environment.apiDataUrl; // Use environment variable for base URL
  private headers = new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem('token')}`});
  constructor(private http: HttpClient) {
    console.log(this.getPromotions());
  }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.baseUrl}/promotions`,{headers: this.headers})
      .pipe(
        catchError(error => {
          console.error('Error fetching promotions:', error);
          return throwError(error);
        })
      );
  }

  getPromotionById(promotionId: number): Observable<Promotion> {
    const url = `${this.baseUrl}/promotions/${promotionId.toString()}`; // Convert bigint to string
    return this.http.get<Promotion>(url,{headers: this.headers})
      .pipe(
        catchError(error => {
          console.error(`Error fetching promotion with ID ${promotionId}:`, error);
          return throwError(error);
        })
      );
  }
}
