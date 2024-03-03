import { Component } from '@angular/core';
import {MenuComponent} from "../../../checkout/components/menu/menu.component";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-product-menu',
  standalone: true,
  imports: [
    MenuComponent,
    MatDividerModule
  ],
  templateUrl: './product-menu.component.html',
  styleUrl: './product-menu.component.css'
})
export class ProductMenuComponent {

}
