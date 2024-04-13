import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../services/product.service";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit{

  httpClient = inject(HttpClient)
  propCode:string = "";
  isLoading:boolean = true;
  restaurntName:string = "";

  constructor(private route: ActivatedRoute, private productService: ProductService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.propCode = params['propCode'];
    });

    this.productService.getProductByCode(this.propCode).subscribe((data: any) => {
      // this.locationPath = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/view?key=AIzaSyD__g3F8b2y48-T86cXJsasB2Ovn-QcS7A&center=${data.data.latitude},${data.data.longitude}&zoom=14`);
      // console.log(this.locationPath);
      this.restaurntName = data.data.name;

      this.isLoading = false;
    });

  }

}
