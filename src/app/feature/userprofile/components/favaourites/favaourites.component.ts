import {Component, inject, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {FavFoodItemComponent} from "./fav-food-item/fav-food-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {
  RecommendationCardComponent
} from "../../../home/components/recommendation/recommendation-card/recommendation-card.component";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../../../services/product.service";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-favaourites',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    FavFoodItemComponent,
    NgForOf,
    RecommendationCardComponent,
    NgIf,
    SkeletonModule
  ],
  templateUrl: './favaourites.component.html',
  styleUrl: './favaourites.component.css'
})
export class FavaouritesComponent implements OnInit{

  // favFoods = [
  //   {
  //     image: 'https://driscolls.imgix.net/-/media/assets/recipes/classic-strawberry-shortcake-recipe.ashx',
  //     name: 'Driscoll\'s Classic Strawberry Shortcake',
  //     restaurent: 'Chinese Restaurent',
  //     description: 'Heavy cream, baking soda, baking powder, all purpose flour, vanilla extract'
  //   },
  //   {
  //     image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/4a/b1/fc/mr-t-t-bone-550g.jpg',
  //     name: 'WHISKEY IN THE JAR, Wroclaw',
  //     restaurent: 'Chinese Restaurent',
  //     description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
  //   },
  //   {
  //     image: 'https://img.taste.com.au/mz48WLZC/w643-h428-cfill-q90/taste/2016/11/easy-green-superfood-salad-68411-1.jpeg',
  //     name: 'Taste Easy green superfood salad',
  //     restaurent: 'Chinese Restaurent',
  //     description: 'Broccoli, apple cider vinegar, pumpkin seeds, chia seeds, sunflower seeds.'
  //   },
  //   {
  //     image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190313-creamy-lemon-parmesan-chicken-horizontal-1553026901.png',
  //     name: 'Roast chicken',
  //     restaurent: 'Chinese Restaurent',
  //     description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
  //   },
  //   {
  //     image: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/10/roasted-chicken-4.jpg',
  //     name: 'Driscoll\'s Classic Strawberry Shortcake',
  //     restaurent: 'Chinese Restaurent',
  //     description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
  //   },
  //   {
  //     image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/4a/b4/9c/el-diablo-burger.jpg',
  //     name: 'WHISKEY IN THE JAR, Wroclaw',
  //     restaurent: 'Chinese Restaurent',
  //     description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
  //   }
  // ];

  httpClient = inject(HttpClient);
  recommendationCards: any[] = [];
  isLoading: boolean = true;
  images: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data: any) => {
      data.forEach((prop: any) => {

        prop.propertyMedia.forEach((value: any) => {
          if (value.category == 'banner') {
            this.images = value;
          }
        });

        this.recommendationCards.push({
          cardImage: this.images.mediaUrl,
          cardAvatar: this.images.thumbnail,
          restaurantName: prop.name,
          reservationPrice: prop.amount.toString(),
          reservationPriceCurrency: prop.amountCurrency,
          reviewsCount: prop.totalRating.toString(),
          ratingsCount: prop.avgRating,
          propCode: prop.code
        });

      });
      this.isLoading = false;
    });
  }


}

export interface FavFoodItem{
  image: string;
  name: string;
  restaurent: string;
  description: string;
}
