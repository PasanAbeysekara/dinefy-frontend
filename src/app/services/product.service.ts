import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private baseUrl = environment.apiDataUrl;
  httpClient = inject(HttpClient);
  protected product:any;


  protected productList:Observable<any>= new Observable<any>();
  //private headers = new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem('token')}`});
  constructor() {}
  //protected productList:Observable<any> = this.httpClient.get(`${this.baseUrl}/properties`);

  // getAllProducts(): Observable<any>{
  //   //console.log("Access Token form get All products product: ",localStorage.getItem('accessToken'));
  //   this.productList = this.httpClient.get(`${this.baseUrl}/properties`);
  //   return this.productList;
  // }

  getAllProducts(): Observable<any> {
    const products = localStorage.getItem('allProductList');
    if (products) {
      return of(JSON.parse(products));
    } else {
      return this.httpClient.get(`${this.baseUrl}/properties`).pipe(
        tap(fetchedProducts => {
          localStorage.setItem('allProductList', JSON.stringify(fetchedProducts));
        })
      );
    }
  }

  // getProductById(id:Number):any{
  //   this.product = this.httpClient.get(`${this.baseUrl}/properties/${id}`);
  //   return this.product;
  // }

  getProductById(id: Number): Observable<any> {
    const products = localStorage.getItem('allProductList');
    if (products) {
      const productList = JSON.parse(products);
      const product = productList.find((p: { id: Number; }) => p.id === id);
      if (product) {
        return of(product);
      }
    }
    return this.httpClient.get(`${this.baseUrl}/properties/${id}`).pipe(
      tap(fetchedProduct => {
        const productList = products ? JSON.parse(products) : [];
        productList.push(fetchedProduct);
        localStorage.setItem('allProductList', JSON.stringify(productList));
      })
    );
  }

  getProductByCodeExplicit(code:string):any{
    this.product = this.httpClient.get(`${this.baseUrl}/properties/code/${code}`);
    return this.product;
  }

  getProductByCode(code: string): Observable<any> {
    const products = localStorage.getItem('allProductList');
    if (products) {
      const productList = JSON.parse(products);
      const product = productList.find((p: { code: string; }) => p.code === code);
      if (product) {
        return of(product);
      }
    }
    return this.httpClient.get(`${this.baseUrl}/properties/code/${code}`).pipe(
      tap(fetchedProduct => {
        const productList = products ? JSON.parse(products) : [];
        productList.push(fetchedProduct);
        localStorage.setItem('allProductList', JSON.stringify(productList));
      })
    );
  }


}
