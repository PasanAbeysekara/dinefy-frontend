import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RecommendationCardComponent} from "./recommendation-card/recommendation-card.component";

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [
    MatButtonModule,
    RecommendationCardComponent
  ],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent {

}
