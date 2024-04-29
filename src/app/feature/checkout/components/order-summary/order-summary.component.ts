import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../services/product.service";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {ReservationService} from "../../../../services/reservation.service";
import {SkeletonModule} from "primeng/skeleton";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [
    SkeletonModule,
    NgIf
  ],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit{

  httpClient = inject(HttpClient)
  propCode:string = "";
  reserveCode:string = "";
  isLoading:number = 0;
  restaurantName:string = "";
  headCount: any;
  reserveDate: any;
  reserveTime: any;
  reserveCity: any;
  reserveState: any;

  constructor(private route: ActivatedRoute, private productService: ProductService,private reservationService: ReservationService, sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.propCode = params['propCode'];
      this.reserveCode = params['reserveCode'];
    });

    this.productService.getProductByCode(this.propCode).subscribe((data: any) => {
      this.restaurantName = data.name;
      this.reserveState = data.basedLocation.state.name;
      this.reserveCity = data.basedLocation.name;
      this.isLoading += 1;
    });

    this.reservationService.getProductByCode(this.reserveCode).subscribe((data:any)=>{
      console.log("AAAAAAAAAAAAAAAAA",data);
      this.headCount = data.data.headCount;
      this.reserveDate = data.data.date;
      this.reserveTime = data.data.time;
      this.isLoading += 1;
    })

  }

}
