import {Component, Input, signal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-recommendation-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    NgbRating,
    ToastModule
  ],
  templateUrl: './recommendation-card.component.html',
  styleUrl: './recommendation-card.component.css',
  providers: [NgbRatingConfig,MessageService],
})
export class RecommendationCardComponent {
  @Input() cardImage!: string;
  @Input() cardAvatar!: string;
  @Input() restaurantName!: string;
  @Input() reservationPrice!: string;
  @Input() reservationPriceCurrency!: string;
  @Input() reviewsCount!: string;
  @Input() ratingsCount!: number;
  @Input() propCode!: string;

  isFavorite: boolean = false;

  redirectToRestaurantDetails(){
    this.router.navigate([`/product/${this.propCode}`]).then(()=>{
      window.scrollTo(0,0);
    });
  }

  constructor(config: NgbRatingConfig, private router: Router, private messageService: MessageService)
  {
    config.max = 5;
    config.readonly = true;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    if(this.isFavorite){
      this.addToFav();
    }
    else{
      this.removeFromFav();
    }
  }

  addToFav(){
    this.messageService.add({ severity: 'success', summary: 'Added To Favourites', detail: 'See all in profile section' });
  }

  removeFromFav(){
    this.messageService.add({ severity: 'info', summary: 'Removed from Favourites', detail: 'Explore more for great match' });
  }

}
