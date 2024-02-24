import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-restaurent-result',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    NgbRating,
    SkeletonModule
  ],
  templateUrl: './restaurent-result.component.html',
  styleUrl: './restaurent-result.component.css',
  providers: [NgbRatingConfig],
})
export class RestaurentResultComponent {
  rating = 0;
  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
  }
}
