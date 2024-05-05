import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RestaurentResultComponent} from "../restaurent-result/restaurent-result.component";
import {RouterLink} from "@angular/router";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-result-restaurants',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RestaurentResultComponent,
    RouterLink,
    SkeletonModule
  ],
  templateUrl: './result-restaurants.component.html',
  styleUrl: './result-restaurants.component.css'
})
export class ResultRestaurantsComponent {

  @Input() viewRestaurantList:any;

}
