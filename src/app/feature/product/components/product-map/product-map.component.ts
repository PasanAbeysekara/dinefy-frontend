import {Component, inject, OnInit} from '@angular/core';
import {MatDividerModule} from "@angular/material/divider";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ProductService} from "../../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-product-map',
  standalone: true,
  imports: [
    MatDividerModule,
    NgIf,
    SkeletonModule
  ],
  templateUrl: './product-map.component.html',
  styleUrl: './product-map.component.css'
})
export class ProductMapComponent implements OnInit{
  httpClient = inject(HttpClient)
  locationPath: SafeResourceUrl = "";
  propCode:string = "GHI012";
  isLoading:boolean = true;

  constructor(private route: ActivatedRoute, private productService: ProductService,private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.propCode = params['propCode'];
    });

    this.productService.getProductByCode(this.propCode).subscribe((data: any) => {
      // this.locationPath = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${data.data.latitude},${data.data.longitude}&hl=es&z=14&amp;output=embed`);
      this.locationPath = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/view?key=AIzaSyD__g3F8b2y48-T86cXJsasB2Ovn-QcS7A&center=${data.data.latitude},${data.data.longitude}&zoom=14`);
      console.log(this.locationPath);
      this.isLoading = false;
    });
  }

}
