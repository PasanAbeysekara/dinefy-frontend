import {Component, signal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-other-places-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './other-places-card.component.html',
  styleUrl: './other-places-card.component.css'
})
export class OtherPlacesCardComponent {
  redirectToRestaurantDetails = signal<any | null>(null);

}
