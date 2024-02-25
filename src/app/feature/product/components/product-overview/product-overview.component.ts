import { Component } from '@angular/core';
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [
    NgbRating,
    NgIf
  ],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css'
})
export class ProductOverviewComponent {
  showFullDescription:boolean = false;
}
