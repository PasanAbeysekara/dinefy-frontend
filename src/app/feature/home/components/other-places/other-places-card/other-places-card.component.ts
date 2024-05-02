import {Component, Input, signal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-other-places-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    ToastModule
  ],
  templateUrl: './other-places-card.component.html',
  styleUrl: './other-places-card.component.css',
  providers:[MessageService]
})
export class OtherPlacesCardComponent {

  @Input() cardImage!: string;
  @Input() restaurantName!: string;
  @Input() propCode!:string;
  isFavorite: boolean = false;

  redirectToRestaurantDetails(){
    this.router.navigate([`/product/${this.propCode}`]).then(()=>{
      window.scrollTo(0,0);
    });
  }

  constructor(private messageService:MessageService,private router: Router){
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
