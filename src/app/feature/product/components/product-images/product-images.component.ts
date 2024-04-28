import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../services/product.service";
import {SkeletonModule} from "primeng/skeleton";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-product-images',
  standalone: true,
  imports: [
    SkeletonModule,
    NgIf
  ],
  templateUrl: './product-images.component.html',
  styleUrl: './product-images.component.css'
})

export class ProductImagesComponent implements OnInit {
  images: { [key: string]: string[] } = {};
  propCode: string = "GHI012";
  restaurantDetails: any;
  isLoading:boolean = true;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.propCode = params['propCode'];
      this.fetchProductData();
    });
  }

  fetchProductData() {
    this.productService.getProductByCodeExplicit(this.propCode).subscribe((data: any) => {
      this.restaurantDetails = data.data;
      console.log("product-images this.restaurantDetails",this.restaurantDetails);
      console.log(this.restaurantDetails.propertyMediaWrapper.coverImages[1].mediaUrl);
      this.images['diga'] = [];
      this.images['usa'] = [];
      this.restaurantDetails.propertyMediaWrapper.coverImages.forEach((value: any) => {
        if (value.mediaType == 'diga') {
          this.images['diga'].push(value.mediaUrl);
        }
        if (value.mediaType == 'usa') {
          this.images['usa'].push(value.mediaUrl);
        }
      });
      this.isLoading = false;
    });
  }
}
