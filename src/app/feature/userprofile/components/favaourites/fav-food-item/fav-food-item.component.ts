import {Component, Input} from '@angular/core';
import {FavFoodItem} from "../favaourites.component";
import {MatIconModule} from "@angular/material/icon";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-fav-food-item',
  standalone: true,
  imports: [
    MatIconModule,
    NgbRating,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './fav-food-item.component.html',
  styleUrl: './fav-food-item.component.css'
})
export class FavFoodItemComponent {
  @Input() favFoodItem!: FavFoodItem;
}
