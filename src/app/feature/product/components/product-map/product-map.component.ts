import {Component, inject, OnInit} from '@angular/core';
import {MatDividerModule} from "@angular/material/divider";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-product-map',
  standalone: true,
  imports: [
    MatDividerModule
  ],
  templateUrl: './product-map.component.html',
  styleUrl: './product-map.component.css'
})
export class ProductMapComponent implements OnInit{
  restaurantId: number = 58; // Sample restaurant ID, replace with actual value if needed
  httpClient = inject(HttpClient)
  locationPath: SafeResourceUrl = "";

  constructor(private sanitizer: DomSanitizer) {}


  ngOnInit() {
    this.fetchRestaurantDetails(this.restaurantId).subscribe((data: any) => {
      // this.locationPath = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${data.data.latitude},${data.data.longitude}&hl=es&z=14&amp;output=embed`);
      this.locationPath = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/view?key=AIzaSyD__g3F8b2y48-T86cXJsasB2Ovn-QcS7A&center=${data.data.latitude},${data.data.longitude}&zoom=14`);
      console.log(this.locationPath);
    });
  }

  fetchRestaurantDetails(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:8081/data/properties/${id}`);
  }

}
