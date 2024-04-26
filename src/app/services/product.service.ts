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
  private headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('accessToken')}`});
  constructor() {
    // console.log("Headers from product: ",this.headers);
    // console.log("Access Token form product: ",localStorage.getItem('accessToken'));
    // console.log("local storage from productService: ",localStorage);
  }
  protected productList:Observable<any>= new Observable<any>();

  getAllProducts(): Observable<any>{
    console.log("Access Token form get All products product: ",localStorage.getItem('accessToken'));
    this.productList = this.httpClient.get(`${this.baseUrl}/properties`,{headers: this.headers});
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
