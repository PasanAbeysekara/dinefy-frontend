import {Component, signal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-promotion-card',
  standalone: true,
    imports: [
        MatCardModule,
        MatIconModule
    ],
  templateUrl: './promotion-card.component.html',
  styleUrl: './promotion-card.component.css'
})
export class PromotionCardComponent {
  redirectToRestaurantDetails = signal<any | null>(null);

}
