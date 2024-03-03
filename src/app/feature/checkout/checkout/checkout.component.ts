import {Component, EventEmitter, inject, Input, Output, TemplateRef, ViewEncapsulation} from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {LocationMapComponent} from "../components/location-map/location-map.component";
import {ProductMenuComponent} from "../../product/components/product-menu/product-menu.component";
import {MenuComponent} from "../components/menu/menu.component";

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
    MenuComponent,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class CheckoutComponent {

  private offcanvasService = inject(NgbOffcanvas);
  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  // @Input() valueProduct: number = 0;
  // @Output() valueChangeProduct = new EventEmitter<number>();
  // incrementProduct() {
  //   this.valueProduct++;
  //   this.emitValueChangeProduct();
  // }
  //
  // decrementProduct() {
  //   if (this.valueProduct > 0) {
  //     this.valueProduct--;
  //     this.emitValueChangeProduct();
  //   }
  // }
  //
  // private emitValueChangeProduct() {
  //   this.valueChangeProduct.emit(this.valueProduct);
  // }



  @Input() valueProduct1: number = 0;
  @Output() valueChangeProduct1 = new EventEmitter<number>();
  incrementProduct1() {
    this.valueProduct1++;
    this.emitValueChangeProduct1();
  }

  decrementProduct1() {
    if (this.valueProduct1 > 0) {
      this.valueProduct1--;
      this.emitValueChangeProduct1();
    }
  }

  private emitValueChangeProduct1() {
    this.valueChangeProduct1.emit(this.valueProduct1);
  }


  @Input() valueProduct2: number = 0;
  @Output() valueChangeProduct2 = new EventEmitter<number>();
  incrementProduct2() {
    this.valueProduct2++;
    this.emitValueChangeProduct2();
  }

  decrementProduct2() {
    if (this.valueProduct2 > 0) {
      this.valueProduct2--;
      this.emitValueChangeProduct2();
    }
  }

  private emitValueChangeProduct2() {
    this.valueChangeProduct2.emit(this.valueProduct2);
  }

  @Input() valueProduct3: number = 0;
  @Output() valueChangeProduct3 = new EventEmitter<number>();
  incrementProduct3() {
    this.valueProduct3++;
    this.emitValueChangeProduct3();
  }

  decrementProduct3() {
    if (this.valueProduct3 > 0) {
      this.valueProduct3--;
      this.emitValueChangeProduct3();
    }
  }

  private emitValueChangeProduct3() {
    this.valueChangeProduct3.emit(this.valueProduct3);
  }


}
