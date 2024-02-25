import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-product-facilities',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './product-facilities.component.html',
  styleUrl: './product-facilities.component.css'
})
export class ProductFacilitiesComponent {

}
