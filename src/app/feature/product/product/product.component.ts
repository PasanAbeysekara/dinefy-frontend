import { Component } from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatButtonToggleModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private router: Router) { }

  redirectToCheckout() {
    const linkToRedirect = '/product/rest-code-1/checkout'; // Replace with the actual link
    this.router.navigateByUrl(linkToRedirect);
  }


}
