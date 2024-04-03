import {Component, inject, Input, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {ProductsItemComponent} from "../products-item/products-item.component";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {Product} from "./model/product";
import {NgOptimizedImage} from "@angular/common";
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SharedModule} from "primeng/api";
import {finalize, forkJoin, Observable, of, Subject} from "rxjs";
import {mergeMap, tap} from "rxjs/operators";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  standalone: true,
  imports: [
    CarouselModule,
    MatButtonModule,
    NgbRating,
    SharedModule,
    HttpClientModule,
    SkeletonModule,
  ],
  styleUrls: ['./promotions.component.css']
})

export class PromotionsComponent implements OnInit {
  constructor(config: NgbRatingConfig,private router: Router) {
    config.max = 5;
    config.readonly = true;
  }

  redirectToRestaurantDetails() {
    this.router.navigate([`/product/${this.property.code}`]);
  }

  responsiveOptions: any[] = [];
  products: any[] = [];
  promotionPropIds: number[] = [];

  isLoading: boolean = true;

  httpClient = inject(HttpClient);
  data: any[] = [];
  property: any;

  productsSubject: Subject<any[]> = new Subject<any[]>();


  ngOnInit(): void {

    this.fetchPromotionData().pipe(
      mergeMap(() => {
        const requests = this.promotionPropIds.map(promoPropId => this.fetchPropertyData(promoPropId));
        return requests.length > 0 ? forkJoin(requests) : of([]);
      })
    ).subscribe(() => {
       this.productsSubject.next(this.products);
       this.isLoading = false;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1536px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  fetchPromotionData(): Observable<any> {
    return this.httpClient.get('http://localhost:8081/data/promotions').pipe(
      tap((data: any) => {
        data.data.content.forEach((promo: any) => {
          this.promotionPropIds.push(promo.propId);
        });
      })
    );
  }

  fetchPropertyData(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:8081/data/properties/${id}`).pipe(
      tap((data: any) => {
        this.property = data.data;
        this.products.push({
          image: this.property.propertyMediaWrapper.bannerImages[0].mediaUrl,
          avatar: this.property.propertyMediaWrapper.bannerImages[0].thumbnail,
          name: this.property.livePromotions[0].name,
          price: this.property.amount,
          currency: this.property.amountCurrency,
          inventoryStatus: 'In Stock',
          rating: this.property.avgRating,
          reviewCount: this.property.totalRating,
          approxPeople: 2
        });
      }),
      finalize(() => {
        // console.log(this.products); // You can remove this line, it's for debugging purposes
        console.log(this.promotionPropIds);
      })
    );
  }


}

// export class PromotionsComponent implements OnInit {
//
//   PromotionsArray: any;
//
//   customOptions: OwlOptions = {
//     loop: true,
//     autoplay: true,
//     center: true,
//     dots: false,
//     margin: 0,
//     stagePadding: 16,
//     autoWidth: false,
//     nav: false,
//     navText:  ['<button mat-icon-button class="ow-navs ow-navs__button ow-navs__btnPrev mat-icon notranslate material-icons mat-icon-no-color">navigate_before</button>', '<button mat-icon-button class="ow-navs ow-navs__button ow-navs__btnNext mat-icon notranslate material-icons mat-icon-no-color">navigate_next</button>'],
//
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 2,
//       },
//       1000: {
//         items: 3,
//       }
//     }
//   };
//   placesSlider: OwlOptions = {
//     loop: true,
//     autoplay: true,
//     center: true,
//     dots: false,
//     autoHeight: true,
//     nav: false,
//     stagePadding: 16,
//     autoWidth: false,
//     navText:  ['<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnPrev mat-icon notranslate material-icons mat-icon-no-color">navigate_before</div>', '<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnNext mat-icon notranslate material-icons mat-icon-no-color">navigate_next</div>'],
//
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 3,
//       },
//       1000: {
//         items: 4,
//       }
//     }
//   };
//
//   constructor() { }
//
//   ngOnInit(): void {
//     this.PromotionsArray = <any> [
//       {
//         imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
//         logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
//         Name: 'Happy hour at cafe Noir',
//         Price: '7,750',
//         id: '1',
//         url: '/product/mcn_pannip',
//         type: 'product-tile-content--horiz',
//         description: 'Happy hour at cafe Noir',
//         description2: 'Happy hour at cafe Noir',
//       },
//       {
//         imgUrl: 'https://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/hotels/top10-samui-hotels/pagePropertiesImage/best-hotels-samui.jpg.jpg',
//         logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
//         Name: 'Happy hour at cafe Noir',
//         Price: '37,912',
//         id: '2',
//         url: '/product/mcn_pannip',
//         type: 'product-tile-content--horiz',
//         description: 'Happy hour at cafe Noir',
//         description2: 'Happy hour at cafe Noir',
//       },
//       {
//         imgUrl: 'https://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/hotels/top10-samui-hotels/pagePropertiesImage/best-hotels-samui.jpg',
//         logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
//         Name: 'Happy hour at cafe Noir',
//         Price: '2,750',
//         id: '3',
//         url: '/product/mcn_pannip',
//         type: 'product-tile-content--horiz',
//         description: 'Happy hour at cafe Noir',
//         description2: 'Happy hour at cafe Noir',
//       },
//       {
//         imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
//         logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
//         Name: 'Happy hour at cafe Noir',
//         Price: '2,751',
//         id: '4',
//         url: '/product/mcn_pannip',
//         type: 'product-tile-content--horiz',
//         description: 'Happy hour at cafe Noir',
//         description2: 'Happy hour at cafe Noir',
//       },
//     ];
//   }
//
// }
