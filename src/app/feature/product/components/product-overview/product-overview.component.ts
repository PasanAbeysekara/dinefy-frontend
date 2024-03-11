import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [
    NgbRating,
    NgIf,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css'
})
export class ProductOverviewComponent implements OnInit{

  restaurantDetails: any;
  httpClient = inject(HttpClient);
  showFullDescription:boolean = false;

  ngOnInit() {
    this.fetchRestaurantDetails(14).subscribe((data: any) => {
      this.restaurantDetails = data.data;
    });
  }

  fetchRestaurantDetails(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:8081/data/properties/${id}`);
  }

  constructor(public changeDetectorRef: ChangeDetectorRef, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}
