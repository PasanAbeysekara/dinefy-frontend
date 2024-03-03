import {Router} from "@angular/router";
import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ViewportRuler} from "@angular/cdk/scrolling";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ProductImagesComponent} from "../components/product-images/product-images.component";
import {MatTabsModule} from "@angular/material/tabs";
import {ReserveModalComponent} from "../components/reserve-modal/reserve-modal.component";
import {MatDividerModule} from "@angular/material/divider";
import {ProductOverviewComponent} from "../components/product-overview/product-overview.component";
import {
  BottomSheetReserveSheetComponent
} from "../components/bottom-sheet-reserve-sheet/bottom-sheet-reserve-sheet.component";
import {ProductFacilitiesComponent} from "../components/product-facilities/product-facilities.component";
import {ProductMenuComponent} from "../components/product-menu/product-menu.component";
import {ProductMapComponent} from "../components/product-map/product-map.component";
import {ProductMediaComponent} from "../components/product-media/product-media.component";
import {ProductReviewComponent} from "../components/product-review/product-review.component";
import {ErgMenuComponent} from "../components/erg-menu/erg-menu.component";

@Component({
  selector: 'app-product',
  standalone: true,
    imports: [
        MatButtonToggleModule,
        ProductImagesComponent,
        MatTabsModule,
        ReserveModalComponent,
        MatDividerModule,
        ProductOverviewComponent,
        BottomSheetReserveSheetComponent,
        ProductFacilitiesComponent,
        ProductMenuComponent,
        ProductMapComponent,
        ProductMediaComponent,
        ProductReviewComponent,
        ErgMenuComponent,
    ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})


export class ProductComponent {

  dialogRef: MatDialogRef<any> | null = null; // Initialize as null
  constructor(private router: Router,private dialog: MatDialog,private viewportRuler: ViewportRuler) { }


  redirectToCheckout() {
    const linkToRedirect = '/product/rest-code-1/checkout'; // Replace with the actual link
    this.router.navigateByUrl(linkToRedirect);
  }

  reserve(): void {

    const isSmallScreen = window.innerWidth < 600;
    this.dialogRef = this.dialog.open(ReserveModalComponent, {
      width: isSmallScreen ? '100%' : '60%',
      panelClass: ['modal--medium', 'modal--stepper'],
      data: {}
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
