import {Component, EventEmitter, inject, Input, OnInit, Output, TemplateRef, ViewEncapsulation} from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {LocationMapComponent} from "../components/location-map/location-map.component";
import {ProductMenuComponent} from "../../product/components/product-menu/product-menu.component";
import {OrderSummaryComponent} from "../components/order-summary/order-summary.component";
import {HttpClient} from "@angular/common/http";
import {MenuService} from "../../../services/menu.service";
import {PropChoicesService} from "../../../services/prop-choices.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {tap} from "rxjs/operators";
import {NgForOf, NgIf} from "@angular/common";
import {SkeletonModule} from "primeng/skeleton";

export interface CartItem {
  id: number;
  name: string;
  amount: number;
  amountCurrency: string;
  description: string;
  quantity: number;
}


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule,
    LocationMapComponent,
    ProductMenuComponent,
    OrderSummaryComponent,
    NgIf,
    SkeletonModule,
    NgForOf,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class CheckoutComponent implements OnInit{

  menus:any;
  propChoicesList:any;
  httpClient = inject(HttpClient)
  propCode:string = "";
  property:any;
  propId:number=0;
  isLoading:number= 0;
  cart: CartItem[] = [];
  totalItems: number = 0;
  totalPrice: number = 0;
  amountCurrency:string = "";

  addToCart(item: any): void {
    const existingItem = this.cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
    this.updateCartSummary();
  }

  decrementCartItem(item: any): void {
    const existingItem = this.cart.find(cartItem => cartItem.name === item.name);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      this.cart = this.cart.filter(cartItem => cartItem.name !== item.name);
    }
    this.updateCartSummary();
  }

  incrementCartItem(item: any): void {
    const existingItem = this.cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    }
    this.updateCartSummary();
  }

  updateCartSummary(): void {
    this.totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    this.totalPrice = this.cart.reduce((sum, item) => sum + (item.amount * item.quantity), 0);
  }

  removeFromCart(item: any): void {
    const existingItem = this.cart.find(cartItem => cartItem.name === item.name);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      this.cart = this.cart.filter(cartItem => cartItem.name !== item.name);
    }
    this.updateCartSummary();
  }

  findCartItem(name: string): CartItem | undefined {
    return this.cart.find(item => item.name === name);
  }

  isItemInCart(name: string): boolean {
    const item = this.findCartItem(name);
    return item ? item.quantity > 0 : false;
  }

  constructor(private menuService:MenuService,private propChoicesService:PropChoicesService,private route: ActivatedRoute, private productService: ProductService,private router: Router) {
  }

  private offcanvasService = inject(NgbOffcanvas);
  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.propCode = params['propCode'];
      this.isLoading++;
    });

    this.productService.getProductByCode(this.propCode).pipe(tap((data:any)=>{
      this.property = data;
      this.propId = this.property.propId;
    })).subscribe(()=>{
      this.amountCurrency = this.property.amountCurrency;
      this.isLoading++;
      this.propChoicesService.getPropChoicesByProperty(this.propId).pipe(tap((propChoiceData:any)=>{
        this.propChoicesList = propChoiceData;
      })).subscribe(()=>{
        this.isLoading++;
      })
    });

    this.menuService.getAllMenus().pipe(tap((data:any)=>{
      this.menus = data.data.content;
    })).subscribe(()=>{
      this.isLoading++;
    });

  }

  redirectPayment() {
    this.router.navigate([`/`]);
  }
}
