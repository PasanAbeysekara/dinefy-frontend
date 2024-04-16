import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiDataUrl;
  httpClient = inject(HttpClient);
  protected product:any;
  private headers = new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem('token')}`});
  constructor() {
    console.log(this.headers);
    console.log(this.headers.get('Authorization'));
  }
  protected productList:Observable<any> = this.httpClient.get(`${this.baseUrl}/properties`,{headers: this.headers});

  getAllProducts(): Observable<any>{
    return this.productList;
  }

  getProductById(id:Number):any{
    this.product = this.httpClient.get(`${this.baseUrl}/properties/${id}`,{headers: this.headers});
    return this.product;
  }

  getProductByCode(code:string):any{
    console.log("Authorization",this.headers.get('Authorization'));  // Add this line to debug the token
    this.product = this.httpClient.get(`${this.baseUrl}/properties/code/${code}`,{headers: this.headers});
    return this.product;
  }

}
