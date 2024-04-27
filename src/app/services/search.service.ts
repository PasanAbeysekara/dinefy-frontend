import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProductService} from "./product.service";
import {Product} from "../feature/home/components/promotions/model/product";

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  protected productsByCityList:Observable<any> = new Observable<any>();

  constructor(private productService: ProductService) { }

}
