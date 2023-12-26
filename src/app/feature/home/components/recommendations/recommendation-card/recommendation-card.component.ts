import {Component, Input, signal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-recommendation-card',
  standalone: true,
    imports: [
      MatCardModule,
      MatIconModule,
      NgbRating
    ],
  templateUrl: './recommendation-card.component.html',
  styleUrl: './recommendation-card.component.css',
  providers: [NgbRatingConfig],
})
export class RecommendationCardComponent {
  redirectToRestaurantDetails = signal<any | null>(null);
  @Input() cardImage!: string;
  @Input() cardAvatar!: string;
  @Input() restaurantName!: string;
  @Input() reservationPrice!: string;
  @Input() reservePeopleCount!: string;
  @Input() reviewsCount!: string;
  @Input() ratingsCount!: number;

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }


}
