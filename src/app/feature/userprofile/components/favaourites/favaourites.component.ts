import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {FavFoodItemComponent} from "./fav-food-item/fav-food-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-favaourites',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    FavFoodItemComponent,
    NgForOf
  ],
  templateUrl: './favaourites.component.html',
  styleUrl: './favaourites.component.css'
})
export class FavaouritesComponent {
  favFoods = [
    {
      image: 'https://driscolls.imgix.net/-/media/assets/recipes/classic-strawberry-shortcake-recipe.ashx',
      name: 'Driscoll\'s Classic Strawberry Shortcake',
      restaurent: 'Chinese Restaurent',
      description: 'Heavy cream, baking soda, baking powder, all purpose flour, vanilla extract'
    },
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/4a/b1/fc/mr-t-t-bone-550g.jpg',
      name: 'WHISKEY IN THE JAR, Wroclaw',
      restaurent: 'Chinese Restaurent',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
      image: 'https://img.taste.com.au/mz48WLZC/w643-h428-cfill-q90/taste/2016/11/easy-green-superfood-salad-68411-1.jpeg',
      name: 'Taste Easy green superfood salad',
      restaurent: 'Chinese Restaurent',
      description: 'Broccoli, apple cider vinegar, pumpkin seeds, chia seeds, sunflower seeds.'
    },
    {
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190313-creamy-lemon-parmesan-chicken-horizontal-1553026901.png',
      name: 'Roast chicken',
      restaurent: 'Chinese Restaurent',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
      image: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/10/roasted-chicken-4.jpg',
      name: 'Driscoll\'s Classic Strawberry Shortcake',
      restaurent: 'Chinese Restaurent',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/4a/b4/9c/el-diablo-burger.jpg',
      name: 'WHISKEY IN THE JAR, Wroclaw',
      restaurent: 'Chinese Restaurent',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    }
  ];
}

export interface FavFoodItem{
  image: string;
  name: string;
  restaurent: string;
  description: string;
}
