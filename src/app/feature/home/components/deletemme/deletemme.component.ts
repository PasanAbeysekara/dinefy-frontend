import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CarouselModule} from "primeng/carousel";
import {MatButtonModule} from "@angular/material/button";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "primeng/api";
import {Product} from "../promotions/model/product";
import {Router} from "@angular/router";
import {finalize, forkJoin, Observable, of, Subject} from "rxjs";
import {mergeMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-deletemme',
  standalone: true,
  imports: [
    CarouselModule,
    MatButtonModule,
    NgbRating,
    SharedModule
  ],
  templateUrl: './deletemme.component.html',
  styleUrl: './deletemme.component.css'
})


export class DeletemmeComponent implements OnInit{
  constructor(private router: Router) {}

  redirectToRestaurantDetails(){
    this.router.navigate(['/product/rest-code-1']);
  }

  responsiveOptions: any[] = [];
  products:any[]=[];
  promotionPropIds:number[] = [];

  httpClient = inject(HttpClient);
  data: any[] = [];
  property:any;

  productsSubject: Subject<any[]> = new Subject<any[]>();


  ngOnInit(): void {
    this.fetchPromotionData().pipe(
      mergeMap(() => {
        const requests = this.promotionPropIds.map(promoPropId => this.fetchPropertyData(promoPropId));
        return requests.length > 0 ? forkJoin(requests) : of([]);
      })
    ).subscribe(() => {
      this.productsSubject.next(this.products);
    });

    this.responsiveOptions = [
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
  }


  fetchPromotionData(): Observable<any> {
    return this.httpClient.get('http://localhost:8081/data/promotions').pipe(
      tap((data: any) => {
        data.data.content.forEach((promo: any) => {
          this.promotionPropIds.push(promo.propId);
        });
      })
    );
  }

  fetchPropertyData(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:8081/data/properties/${id}`).pipe(
      tap((data: any) => {
        this.property = data.data;
        this.products.push({
          image: this.property.propertyMediaWrapper.bannerImages[0].mediaUrl,
          avatar: this.property.propertyMediaWrapper.bannerImages[0].thumbnail,
          name: this.property.livePromotions[0].name,
          price: this.property.amount,
          inventoryStatus: 'In Stock',
          rating: this.property.avgRating,
          reviewCount: this.property.totalRating,
          approxPeople: 2
        });
      }),
      finalize(() => {
        console.log(this.products); // You can remove this line, it's for debugging purposes
        console.log(this.promotionPropIds);
      })
    );
  }

}
