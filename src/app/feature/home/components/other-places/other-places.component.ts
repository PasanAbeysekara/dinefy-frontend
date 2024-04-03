import {Component, inject, Input, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";
import {PlaceTileComponent} from "../place-tile/place-tile.component";
import {NgForOf} from "@angular/common";
import {OtherPlacesCardComponent} from "./other-places-card/other-places-card.component";
import {RecommendationCardComponent} from "../recommendation/recommendation-card/recommendation-card.component";
import {CarouselModule} from "primeng/carousel";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "primeng/api";
import {Product} from "../promotions/model/product";
import {Otherplace} from "./model/other-place";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-other-places',
  templateUrl: './other-places.component.html',
  standalone: true,
  imports: [
    CarouselModule,
    // HomeModule,
    MatIconModule,
    MatButtonModule,
    MatDialogClose,
    PlaceTileComponent,
    NgForOf,
    OtherPlacesCardComponent,
    RecommendationCardComponent,
    CarouselModule,
    NgbRating,
    SharedModule,
    SkeletonModule,
  ],
  styleUrls: ['./other-places.component.css']
})

export class OtherPlacesComponent implements OnInit{

  httpClient = inject(HttpClient);
  otherPlaces: any[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '2000px',
      numVisible: 4,
      numScroll: 1
    },
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
  isLoading: boolean = true;

  ngOnInit() {
    this.fetchOtherProperties().subscribe((data: any) => {
      data.forEach((prop: any) => {
        this.otherPlaces.push({
          cardImage: prop.propertyMedia[0].mediaUrl,
          restaurantName: prop.name,
          propCode: prop.code
        });
      });
      // console.log(this.otherPlaces)
      this.isLoading = false;
    });
  }

  fetchOtherProperties(): Observable<any> {
    return this.httpClient.get('http://localhost:8081/data/properties');
  }
}


// export class OtherPlacesComponent implements OnInit {
//
//   PlacesArray: any;
//
//   placesSlider: OwlOptions = {
//     loop: true,
//     autoplay: true,
//     center: true,
//     dots: false,
//     autoHeight: true,
//     nav: false,
//     stagePadding: 16,
//     autoWidth: false,
//     navText:  ['<button mat-icon-button class="ow-navs ow-navs__button ow-navs__btnPrev mat-icon notranslate material-icons mat-icon-no-color">navigate_before</button>', '<button mat-icon-button class="ow-navs ow-navs__button ow-navs__btnNext mat-icon notranslate material-icons mat-icon-no-color">navigate_next</button>'],
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
//   owlCar: any;
//
//   constructor() { }
//
//   ngOnInit(): void {
//     this.PlacesArray = <any> [
//       {
//         id: 'pl1',
//         imgUrl: 'https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2019/09/yimg_e9dsV5.jpg',
//         description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
//         title: 'Tea Avenue',
//       },
//       {
//         id: 'pl2',
//         imgUrl: 'https://www.primeresidencies.lk/?w=630&src=resources/212/slide1.jpg',
//         description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
//         title: 'Barnes Place',
//       },
//       {
//         id: 'pl3',
//         imgUrl: 'https://q-cf.bstatic.com/images/hotel/max1024x768/134/134394306.jpg',
//         description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
//         title: 'Kingsbury',
//       },
//       {
//         id: 'pl4',
//         imgUrl: 'https://q-cf.bstatic.com/images/hotel/max1024x768/134/134394306.jpg',
//         description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
//         title: 'Kingsbury',
//       },
//     ];
//   }
//
// }
