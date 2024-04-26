import {Component, inject, Input, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {ProductsItemComponent} from "../products-item/products-item.component";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {Product} from "./model/product";
import {NgOptimizedImage} from "@angular/common";
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {SharedModule} from "primeng/api";
import {finalize, forkJoin, Observable, of, Subject} from "rxjs";
import {mergeMap, tap} from "rxjs/operators";
import {SkeletonModule} from "primeng/skeleton";
import {PromotionsService} from "../../../../services/promotions.service";

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  standalone: true,
  imports: [
    CarouselModule,
    MatButtonModule,
    NgbRating,
    SharedModule,
    HttpClientModule,
    SkeletonModule,
  ],
  styleUrls: ['./promotions.component.css']
})

export class PromotionsComponent implements OnInit {
  responsiveOptions: any[] = [];
  products: any[] = [];
  promotionPropIds: number[] = [];
  isLoading: boolean = true;
  productsSubject: Subject<any[]> = new Subject<any[]>();
  property: any;

  constructor(
    private promotionsService: PromotionsService,
    config: NgbRatingConfig,
    private router: Router
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.promotionsService.fetchPromotionData().pipe(
      tap((data: any) => {
        data.data.content.forEach((promo: any) => {
          this.promotionPropIds.push(promo.propId);
        });
      }),
      mergeMap(() => this.promotionsService.fetchAllProperties(this.promotionPropIds))
    ).subscribe((properties: any[]) => {
      properties.forEach((property: any) => {
        this.products.push({
          image: property.data.propertyMediaWrapper.bannerImages[0].mediaUrl,
          avatar: property.data.propertyMediaWrapper.bannerImages[0].thumbnail,
          name: property.data.livePromotions[0].name,
          price: property.data.amount,
          currency: property.data.amountCurrency,
          inventoryStatus: 'In Stock',
          rating: property.data.avgRating,
          reviewCount: property.data.totalRating,
          approxPeople: 2
        });
      });
      this.productsSubject.next(this.products);
      this.isLoading = false;
    });

    this.responsiveOptions = [
      { breakpoint: '1536px', numVisible: 3, numScroll: 1 },
      { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
      { breakpoint: '768px', numVisible: 1, numScroll: 1 }
    ];
  }

  redirectToRestaurantDetails(propertyCode: string) {
    this.router.navigate([`/product/${propertyCode}`]);
  }
}
