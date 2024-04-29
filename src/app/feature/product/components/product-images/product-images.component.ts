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
    this.productService.getProductByCode(this.propCode).subscribe((data: any) => {
      this.restaurantDetails = data;
      this.images['diga'] = [];
      this.images['usa'] = [];
      this.restaurantDetails.propertyMedia.filter((each: { category: string; }) => each.category=="cover").forEach((value: any) => {
        if (value.type == 'diga') {
          this.images['diga'].push(value.mediaUrl);
        }
        if (value.type == 'usa') {
          this.images['usa'].push(value.mediaUrl);
        }
      });
      this.isLoading = false;
    });
  }
}
