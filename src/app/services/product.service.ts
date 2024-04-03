import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient = inject(HttpClient);
  protected productList:Observable<any> = this.httpClient.get('http://localhost:8081/data/properties');

  protected product:any;
  constructor() { }

  getAllProducts(): Observable<any>{
    return this.productList;
  }

  getProductById(id:Number):any{
    this.product = this.httpClient.get(`http://localhost:8081/data/properties/${id}`);
    return this.product;
  }

  getProductByCode(code:string):any{
    this.product = this.httpClient.get(`http://localhost:8081/data/properties/code/${code}`);
    return this.product;
  }

}
