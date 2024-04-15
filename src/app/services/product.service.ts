import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiDataUrl;
  httpClient = inject(HttpClient);
  protected product:any;
  constructor() { }
  protected productList:Observable<any> = this.httpClient.get(`${this.baseUrl}/properties`);

  getAllProducts(): Observable<any>{
    return this.productList;
  }

  getProductById(id:Number):any{
    this.product = this.httpClient.get(`${this.baseUrl}/properties/${id}`);
    return this.product;
  }

  getProductByCode(code:string):any{
    this.product = this.httpClient.get(`${this.baseUrl}/properties/code/${code}`);
    return this.product;
  }

}
