import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {SkeletonModule} from "primeng/skeleton";
import {ProductService} from "../../../../services/product.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-restaurent-result',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    NgbRating,
    SkeletonModule,
    NgIf
  ],
  templateUrl: './restaurent-result.component.html',
  styleUrl: './restaurent-result.component.css',
  providers: [NgbRatingConfig],
})
export class RestaurentResultComponent implements OnInit {
  rating = 0;
  property:any;
  isLoaded:boolean = false;

  constructor(private productService:ProductService,config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
  }

  ngOnInit(): void {
    this.property = this.productService.getProductById(54).subscribe((data:any)=>{
      this.property = data.data;
      this.isLoaded = true;
    })
  }

}
