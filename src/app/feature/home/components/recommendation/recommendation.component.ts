import {Component, inject, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RecommendationCardComponent} from "./recommendation-card/recommendation-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {SkeletonModule} from "primeng/skeleton";
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [
    MatButtonModule,
    RecommendationCardComponent,
    NgForOf,
    SkeletonModule,
    NgIf
  ],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent implements OnInit{

  httpClient = inject(HttpClient);
  recommendationCards: any[] = [];
  isLoading: boolean = true;

  recommendationCards2 = [
    {
      cardImage: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/af/fe/ab/front-view-of-restaurant.jpg',
      cardAvatar: 'https://d3plttq4n63nzt.cloudfront.net/Ellipse_24.png',
      restaurantName: 'Delicious Bistro',
      reservationPrice: '4000',
      reservationPriceCurrency:'LKR',
      reservePeopleCount: '2',
      reviewsCount: '150',
      ratingsCount: 5
    },
    {
      cardImage: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/af/fe/ab/front-view-of-restaurant.jpg',
      cardAvatar: 'https://d3plttq4n63nzt.cloudfront.net/Ellipse_23.png',
      restaurantName: 'Savory Grill',
      reservationPrice: '4500',
      reservationPriceCurrency:'LKR',
      reservePeopleCount: '4',
      reviewsCount: '200',
      ratingsCount: 4
    },
    {
      cardImage: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/af/fe/ab/front-view-of-restaurant.jpg',
      cardAvatar: 'https://d3plttq4n63nzt.cloudfront.net/Ellipse_21.png',
      restaurantName: 'Spice Haven',
      reservationPrice: '3500',
      reservationPriceCurrency:'LKR',
      reservePeopleCount: '3',
      reviewsCount: '180',
      ratingsCount: 4
    },
    {
      cardImage: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/af/fe/ab/front-view-of-restaurant.jpg',
      cardAvatar: 'https://d3plttq4n63nzt.cloudfront.net/Ellipse_22.png',
      restaurantName: 'Café Serenity',
      reservationPrice: '3000',
      reservationPriceCurrency:'LKR',
      reservePeopleCount: '2',
      reviewsCount: '120',
      ratingsCount: 5
    },
    {
      cardImage: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/af/fe/ab/front-view-of-restaurant.jpg',
      cardAvatar: 'https://d3plttq4n63nzt.cloudfront.net/Ellipse_21.png',
      restaurantName: 'Mediterranean Delight',
      reservationPrice: '5000',
      reservationPriceCurrency:'LKR',
      reservePeopleCount: '5',
      reviewsCount: '250',
      ratingsCount: 3
    },
    {
      cardImage: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/af/fe/ab/front-view-of-restaurant.jpg',
      cardAvatar: 'https://d3plttq4n63nzt.cloudfront.net/Ellipse_22.png',
      restaurantName: 'Sushi Fusion',
      reservationPrice: '4200',
      reservationPriceCurrency:'LKR',
      reservePeopleCount: '3',
      reviewsCount: '210',
      ratingsCount: 4
    },
    {
      cardImage: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/af/fe/ab/front-view-of-restaurant.jpg',
      cardAvatar: 'https://d3plttq4n63nzt.cloudfront.net/Ellipse_24.png',
      restaurantName: 'Farm-to-Table Fresh',
      reservationPrice: '4800',
      reservationPriceCurrency:'LKR',
      reservePeopleCount: '4',
      reviewsCount: '190',
      ratingsCount: 5
    },
    {
      cardImage: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/af/fe/ab/front-view-of-restaurant.jpg',
      cardAvatar: 'https://d3plttq4n63nzt.cloudfront.net/Ellipse_23.png',
      restaurantName: 'Urban Spice',
      reservationPrice: '3900',
      reservationPriceCurrency:'LKR',
      reservePeopleCount: '2',
      reviewsCount: '160',
      ratingsCount: 4
    }
  ];

  constructor(private productService: ProductService) {}


  ngOnInit() {
    this.productService.getAllProducts().subscribe((data: any) => {
      data.forEach((prop: any) => {
        this.recommendationCards.push({
          cardImage: prop.propertyMedia[0].mediaUrl,
          cardAvatar: prop.propertyMedia[0].thumbnail,
          restaurantName: prop.name,
          reservationPrice: prop.amount.toString(),
          reservationPriceCurrency: prop.amountCurrency,
          reservePeopleCount: '2',
          reviewsCount: prop.totalRating.toString(),
          ratingsCount: prop.avgRating,
          propCode: prop.code
        });
      });
      // console.log(this.recommendationCards);
      this.isLoading = false;
    });
  }

}
