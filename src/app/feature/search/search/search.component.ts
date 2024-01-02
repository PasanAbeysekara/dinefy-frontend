import {Component, signal} from '@angular/core';
import {ProductComponent} from "../../product/product/product.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatButtonToggleModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private router: Router) { }
  redirectToRestaurant(){
    const linkToRedirect = '/product/rest-code-1'; // Replace with the actual link
    this.router.navigateByUrl(linkToRedirect);
  };
}
