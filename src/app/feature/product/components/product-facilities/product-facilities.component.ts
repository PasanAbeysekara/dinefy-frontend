import {Component, inject, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-product-facilities',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './product-facilities.component.html',
  styleUrl: './product-facilities.component.css'
})
export class ProductFacilitiesComponent implements OnInit{
  facilities: any[] = [];
  restaurantId: number = 58; // Sample restaurant ID, replace with actual value if needed
  httpClient = inject(HttpClient)

  ngOnInit() {
    this.fetchRestaurantDetails(this.restaurantId).subscribe((data: any) => {
      this.facilities = data.data.facilities.map((facility: any) => {
        return {
          icon: facility.sysFacility.icon,
          name: facility.name
        };
      });
    });
  }

  fetchRestaurantDetails(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:8081/data/properties/${id}`);
  }

}
