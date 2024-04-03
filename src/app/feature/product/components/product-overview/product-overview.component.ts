import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductService} from "../../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [
    NgbRating,
    NgIf,
    MatButtonModule,
    HttpClientModule,
    SkeletonModule
  ],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css'
})
export class ProductOverviewComponent implements OnInit{

  restaurantDetails: any;
  httpClient = inject(HttpClient);
  showFullDescription:boolean = false;
  propCode:string = "GHI012";

  constructor(private route: ActivatedRoute, private productService: ProductService, public changeDetectorRef: ChangeDetectorRef, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.propCode = params['propCode'];
    });

    this.productService.getProductByCode(this.propCode).subscribe((data: any) => {
      this.restaurantDetails = data.data;
    });
  }

}
