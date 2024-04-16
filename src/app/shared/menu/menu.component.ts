import {Component, inject, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MenuService} from "../../services/menu.service";
import {tap} from "rxjs/operators";
import {NgForOf, NgIf} from "@angular/common";
import {SkeletonModule} from "primeng/skeleton";
import {PropChoicesService} from "../../services/prop-choices.service";
import {ProductService} from "../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {SafeResourceUrl} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    NgForOf,
    NgIf,
    SkeletonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit{
  menus:any;
  propChoicesList:any=[];
  httpClient = inject(HttpClient)
  propCode:string = "";
  property:any;
  propId:number=0;
  isLoading:boolean = true;

  constructor(private menuService:MenuService,private propChoicesService:PropChoicesService,private route: ActivatedRoute, private productService: ProductService,) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.propCode = params['propCode'];
    });

    this.productService.getProductByCode(this.propCode).pipe(tap((data:any)=>{
      this.property = data.data;
      this.propId = data.data.propId;

      console.log("Eka")
      console.log(data);
      this.propChoicesService.getPropChoicesByProperty(this.propId).pipe(tap((propChoiceData:any)=>{
        this.propChoicesList = propChoiceData;
      })).subscribe(()=>{
        console.log((this.propChoicesList));
      })
      console.log("Deka");
      this.isLoading = false;
    })).subscribe(()=>{
    });

    this.menuService.getAllMenus().pipe(tap((data:any)=>{
      this.menus = data.data.content;
    })).subscribe(()=>{
      this.isLoading = false;
      console.log(this.menus);
    });



    // this.propChoicesService.getPropChoicesByProperty()


  }
}
