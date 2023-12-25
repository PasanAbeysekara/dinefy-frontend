import {Component, signal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-recommendation-card',
  standalone: true,
    imports: [
        MatCardModule
    ],
  templateUrl: './recommendation-card.component.html',
  styleUrl: './recommendation-card.component.css'
})
export class RecommendationCardComponent {
  redirectToRestaurantDetails = signal<any | null>(null);

}
