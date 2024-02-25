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

export class ProductMediaComponent{
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

  imageObject: Array<object> = [
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Image title',
      alt: 'Image alt'
    },
    {
      image: 'https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=3751&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=3751&q=80',
      alt: 'Image alt'
    },
    {
      video: 'https://youtu.be/6pxRHBw-k8M',
      posterImage: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      title: 'Image title'
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Image title',
      alt: 'Image alt'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      thumbImage: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      alt: 'Image alt'
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Image title',
      alt: 'Image alt'
    }
  ];

}


