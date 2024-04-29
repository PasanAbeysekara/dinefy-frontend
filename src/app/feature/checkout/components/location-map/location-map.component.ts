import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import { Loader } from "@googlemaps/js-api-loader"
import {ProductService} from "../../../../services/product.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {SkeletonModule} from "primeng/skeleton";
@Component({
  selector: 'app-location-map',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SkeletonModule],
  templateUrl: './location-map.component.html',
  styleUrl: './location-map.component.css'
})
export class LocationMapComponent implements OnInit {

  httpClient = inject(HttpClient)
  locationPath: SafeResourceUrl = "";
  propCode:string = "";
  isLoading:boolean = true;

  constructor(private route: ActivatedRoute, private productService: ProductService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.propCode = params['propCode'];
    });

    this.productService.getProductByCode(this.propCode).subscribe((data: any) => {
      // this.locationPath = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${data.data.latitude},${data.data.longitude}&hl=es&z=14&amp;output=embed`);
      this.locationPath = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/view?key=AIzaSyD__g3F8b2y48-T86cXJsasB2Ovn-QcS7A&center=${data.latitude},${data.longitude}&zoom=14`);
      console.log(this.locationPath);
      this.isLoading = false;
    });
  }


}
