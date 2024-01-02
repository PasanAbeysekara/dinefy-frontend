import { Component,OnInit } from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {Router} from "@angular/router";
import { ReserveModalComponent } from '../components/reserve-modal/reserve-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-product',
  standalone: true,
    providers: [
      MatDialog,
    ],
  imports: [
    MatButtonToggleModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit  {

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

  setDialogWidth(): void {
      if (this.dialogRef && this.dialogRef.componentInstance) {
        const isSmallScreen = this.viewportRuler.getViewportSize().width < 600;
        this.dialogRef.updateSize(isSmallScreen ? '100%' : '60%', '');
      }
  }

  ngOnInit(): void {
     // Set initial width based on screen size
     this.setDialogWidth();
     // Listen for window resize events
     window.addEventListener('resize', this.setDialogWidth.bind(this)); // Use bind for correct context
  }

}
