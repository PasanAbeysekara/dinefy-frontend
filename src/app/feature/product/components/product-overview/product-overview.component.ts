import {ChangeDetectorRef, Component} from '@angular/core';
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [
    NgbRating,
    NgIf,
    MatButtonModule
  ],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css'
})
export class ProductOverviewComponent {
  showFullDescription:boolean = false;
  constructor(public changeDetectorRef: ChangeDetectorRef, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}
