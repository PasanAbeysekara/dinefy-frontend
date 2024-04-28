import {Component, inject, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../services/product.service";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-product-facilities',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    NgForOf,
    NgIf,
    SkeletonModule
  ],
  templateUrl: './product-facilities.component.html',
  styleUrl: './product-facilities.component.css'
})
export class ProductFacilitiesComponent implements OnInit{
  facilities: any[] = [];
  // restaurantId: number = 58; // Sample restaurant ID, replace with actual value if needed

  httpClient = inject(HttpClient)
  propCode:string = "";
  isLoading:boolean = true;

  constructor(private route: ActivatedRoute, private productService: ProductService,private sanitizer: DomSanitizer) {}



  ngOnInit() {
    // this.fetchRestaurantDetails(this.restaurantId).subscribe((data: any) => {
    //   this.facilities = data.data.facilities.map((facility: any) => {
    //     return {
    //       icon: facility.sysFacility.icon,
    //       name: facility.name
    //     };
    //   });
    // });
    this.route.params.subscribe(params => {
      this.propCode = params['propCode'];
    });

    this.productService.getProductByCode(this.propCode).subscribe((data: any) => {
      // this.locationPath = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${data.data.latitude},${data.data.longitude}&hl=es&z=14&amp;output=embed`);
      this.facilities = data.facilities.map((facility: any) => {
        return {
          icon: facility.sysFacility.icon,
          description: facility.description
        };
      });
      this.isLoading = false;
    });


  }

  // fetchRestaurantDetails(id: number): Observable<any> {
  //   return this.httpClient.get(`http://localhost:8081/data/properties/${id}`);
  // }

}
