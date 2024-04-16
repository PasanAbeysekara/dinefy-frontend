import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, forkJoin, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Promotion } from '../models/api/productInfoModel';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class PromotionsService {
  private baseUrl = environment.apiDataUrl;
  private headers = new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem('token')}`});

  constructor(private http: HttpClient) {
  }

  fetchPromotionData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/promotions`, {headers: this.headers}).pipe(
      tap((data: any) => {
      })
    );
  }

  fetchPropertyData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/properties/${id}`, {headers: this.headers}).pipe(
      tap((data: any) => {
      })
    );
  }

  fetchAllProperties(promotionPropIds: number[]): Observable<any[]> {
    if (promotionPropIds.length > 0) {
      const requests = promotionPropIds.map(id => this.fetchPropertyData(id));
      return forkJoin(requests);
    } else {
      return of([]);
    }
  }
}
