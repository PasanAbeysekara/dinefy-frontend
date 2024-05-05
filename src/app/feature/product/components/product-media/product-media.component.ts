import {Component, OnInit} from '@angular/core';
import {MatDividerModule} from "@angular/material/divider";
import {GalleryComponent, GalleryItem, ImageItem, VideoItem} from "ng-gallery";
import {NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {Subscription} from "rxjs";
import {PropMediaModel} from "../../../../models/api/productInfoModel";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/models/app-state.model";
import {NgImageSliderModule} from "ng-image-slider";
import {ProductService} from "../../../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-media',
  standalone: true,
  imports: [
    MatDividerModule,
    GalleryComponent,
    NgIf,
    NgForOf,
    MatButtonModule,
    NgImageSliderModule,
  ],
  templateUrl: './product-media.component.html',
  styleUrl: './product-media.component.css'
})

export class ProductMediaComponent implements OnInit{
  // items = [
  //   "https://lh3.googleusercontent.com/p/AF1QipPli3GgtZ83UmGvqbDHJgYqIYOa78YckL5Jj2KB=s680-w680-h510",
  //   "https://lh3.googleusercontent.com/p/AF1QipO2aDqT9Hxka-v5oVfkLUfrVfAO-D5Vjz4rTN8R=s680-w680-h510",
  //   "https://d3plttq4n63nzt.cloudfront.net/restauret_promo_2.mp4",
  //   "https://lh3.googleusercontent.com/p/AF1QipOv-tiZh9oLnxBuGLC_VAxGgq5gIv9IMrcyM6aQ=s680-w680-h510",
  //   "https://lh3.googleusercontent.com/p/AF1QipNk-UtcMD9ol1cm31bhMejfCMMjA6RnPnWoVJWi=s680-w680-h510",
  //   "https://lh3.googleusercontent.com/p/AF1QipMQIhyp1s6KeruzJLHqBJVMpjyaMF7g-7zmgLn3=s680-w680-h510"
  // ];

  indexImageObject: Array<object> =[];
  isIndexImageShowing = false;
  imageObject: Array<object> =[];
  propCode: string = "GHI012";
  restaurantDetails: any;

  constructor(private route: ActivatedRoute,private productService: ProductService){}


  // imageObject: Array<object> = [
  //   {
  //     image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  //     thumbImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  //     title: 'Image title',
  //     alt: 'Image alt'
  //   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.propCode = params['propCode'];
    });

    this.productService.getProductByCode(this.propCode).subscribe((product:any)=>{
      product.propertyMedia.forEach((item:any)=>{
        this.imageObject.push({
          image:item.mediaUrl,
          thumbImage:item.mediaUrl,
          title:item.title,
          alt:item.file,
        });
      })
    })
  }

}


