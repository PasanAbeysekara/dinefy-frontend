import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Promotion} from "../models/api/productInfoModel";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  // This method fetches a list of products from a remote server.
  getProductsSmall(): Observable<Promotion[]> {
    // return this.http.get<Promotion[]>('https://your-api-url.com/products');
    return this.http.get<Promotion[]>('https://raw.githubusercontent.com/PasanAbeysekara/dinefy-mock-api/main/mocks-promotions.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return of([]);
  }
}
