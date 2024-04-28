import {Component, Input, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {SkeletonModule} from "primeng/skeleton";
import {ProductService} from "../../../../services/product.service";
import {NgForOf, NgIf} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";

@Component({
  selector: 'app-restaurent-result',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    NgbRating,
    SkeletonModule,
    NgIf,
    NgForOf,
    MatChipsModule
  ],
  templateUrl: './restaurent-result.component.html',
  styleUrl: './restaurent-result.component.css',
  providers: [NgbRatingConfig],
})
export class RestaurentResultComponent implements OnInit {
  rating = 0;
  // property:any;
  // isLoaded:boolean = false;

  restaurantName!: string;
  restaurantDescription!: string;
  reservationPrice!: string;
  reservationPriceCurrency!: string;
  reviewsCount!: string;
  ratingsCount!: number;
  restaurantFacilities!: any;
  restaurantTags!: any;
  @Input() restaurant: any;

  constructor(private productService:ProductService,config: NgbRatingConfig) {
    config.max = 5;
  }

  ngOnInit(): void {
    // this.property = this.productService.getProductById(54).subscribe((data:any)=>{
    //   this.property = data.data;
    //   this.isLoaded = true;
    // })
    this.restaurantName = this.restaurant.name;
    this.restaurantDescription = this.restaurant.description;
    this.reservationPrice = this.restaurant.amount.toString();
    this.reservationPriceCurrency = this.restaurant.amountCurrency;
    this.ratingsCount = this.restaurant.avgRating.toString();
    this.reviewsCount = this.restaurant.totalRating.toString();
    this.restaurantFacilities = this.restaurant.facilities;
    this.restaurantTags = this.restaurant.tags;
  }

  protected readonly Number = Number;
}
