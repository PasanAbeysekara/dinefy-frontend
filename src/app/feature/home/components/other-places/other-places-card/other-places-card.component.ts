import {Component, Input, signal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {Router} from "@angular/router";

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

  @Input() cardImage!: string;
  @Input() restaurantName!: string;
  @Input() propCode!:string;

  redirectToRestaurantDetails(){
    this.router.navigate([`/product/${this.propCode}`]);
  }

  constructor(private router: Router){
  }

}
