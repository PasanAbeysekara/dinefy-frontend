import { Component, Input } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurent-card-1',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './restaurent-card-1.component.html',
  styleUrl: './restaurent-card-1.component.css'
})
export class RestaurentCard1Component {
  @Input() cardImage!: string;
  @Input() cardAvatar!: string;
  @Input() cardTitle!: string;
  @Input() cardSubtitle!: string;

  constructor(private router: Router) {}
  redirectToRestaurantDetails() {
    this.router.navigate(['/product/rest-code-1']);
  }
}
