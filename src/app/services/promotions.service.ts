import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Promotion } from '../models/api/productInfoModel';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  private baseUrl = environment.apiUrl; // Use environment variable for base URL

  constructor(private http: HttpClient) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.baseUrl}/promotions`)
      .pipe(
        catchError(error => {
          console.error('Error fetching promotions:', error);
          return throwError(error);
        })
      );
  }

  getPromotionById(promotionId: bigint): Observable<Promotion> {
    const url = `${this.baseUrl}/promotions/${promotionId.toString()}`; // Convert bigint to string
    return this.http.get<Promotion>(url)
      .pipe(
        catchError(error => {
          console.error(`Error fetching promotion with ID ${promotionId}:`, error);
          return throwError(error);
        })
      );
  }
}
