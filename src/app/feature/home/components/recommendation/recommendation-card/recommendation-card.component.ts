import {Component, Input, signal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

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
  redirectToRestaurantDetails(){
    this.router.navigate(['/product/rest-code-1']);
  }
  @Input() cardImage!: string;
  @Input() cardAvatar!: string;
  @Input() restaurantName!: string;
  @Input() reservationPrice!: string;
  @Input() reservePeopleCount!: string;
  @Input() reviewsCount!: string;
  @Input() ratingsCount!: number;

  constructor(config: NgbRatingConfig,private router: Router) {
    config.max = 5;
    config.readonly = true;
  }


}
