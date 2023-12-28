import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {OwlOptions} from "ngx-owl-carousel-o";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatRippleModule} from "@angular/material/core";
import {RatingStarsComponent} from "../../../../shared/rating-stars/rating-stars.component";
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";

export interface favPlaces {
  imgUrl: string;
  title: string;
  subTitle: string;
}

const DATA: favPlaces[] = [
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Buenos Aires',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'Applebee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    title: 'Arbys',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'Sapphyr Lounge',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Oak Ray Flower Drum Restaurant',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    title: 'Cafe Shaze',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'CE LA VI Restaurant & Lounge',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
    title: 'Graze Kitchen',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
    title: 'Plus Nine Four',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1574936145840-28808d77a0b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'The Ocean, The Kingsbury',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2153&q=80',
    title: 'Shang Palace',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
    title: 'Capital Bar & Grill',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Harbour Court, The Kingsbury',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    title: 'Navratna',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
    title: 'Nuga Gama',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1499186024912-c374ac2e9cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2132&q=80',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1985&q=80',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1586999768265-24af89630739?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
  {
    imgUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
    title: 'Good Day Coffee',
    subTitle: 'Chinese Restaurent',
  },
];

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    AsyncPipe,
    NgForOf,
    MatRippleModule,
    RatingStarsComponent,
    NgbRating
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css',

})
export class GeneralComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<favPlaces> = new MatTableDataSource<favPlaces>(DATA);
  favPlacesSlider: OwlOptions = {
    loop: false,
    autoplay: false,
    center: true,
    dots: true,
    autoHeight: true,
    nav: false,
    stagePadding: 16,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 1,
      }
    }
  };
  // constructor(public changeDetectorRef: ChangeDetectorRef) { }
  constructor(public changeDetectorRef: ChangeDetectorRef, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
}
