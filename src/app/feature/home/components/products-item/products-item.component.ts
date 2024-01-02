import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../../../models/productModel';
import {MatRippleModule} from "@angular/material/core";
import {RouterModule} from "@angular/router";
import {RatingStarsComponent} from "../../../../shared/rating-stars/rating-stars.component";

@Component({
  selector: 'app-products-item',
  standalone: true,
  templateUrl: './products-item.component.html',
  imports: [
    MatRippleModule,
    RouterModule,
    RatingStarsComponent
  ],
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  @Input() model: ProductModel | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
