import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle, NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {ReserveModalComponent} from "../reserve-modal/reserve-modal.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ViewportRuler} from "@angular/cdk/scrolling";
import {ErgMenuComponent} from "../erg-menu/erg-menu.component";

@Component({
  selector: 'app-bottom-sheet-reserve-sheet',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    AsyncPipe,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatRippleModule,
    NgForOf,
    NgbRating,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, NgbDropdown, NgbDropdownMenu, NgbDropdownToggle, MatAutocompleteModule, ReactiveFormsModule, MatSelectModule, MatRadioModule, ErgMenuComponent
  ],
  templateUrl: './bottom-sheet-reserve-sheet.component.html',
  styleUrl: './bottom-sheet-reserve-sheet.component.css',
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class BottomSheetReserveSheetComponent{
  @Input() valueAdults: number = 0;
  @Output() valueChangeAdults = new EventEmitter<number>();

  @Input() valueChildren: number = 0;
  @Output() valueChangeChildren = new EventEmitter<number>();


  incrementAdults() {
    this.valueAdults++;
    this.emitValueChangeAdults();
  }

  decrementAdults() {
    if (this.valueAdults> 0) {
      this.valueAdults--;
      this.emitValueChangeAdults();
    }
  }
  incrementChildren() {
    this.valueChildren++;
    this.emitValueChangeChildren();
  }

  decrementChildren() {
    if (this.valueChildren > 0) {
      this.valueChildren--;
      this.emitValueChangeChildren();
    }
  }

  private emitValueChangeAdults() {
    this.valueChangeChildren.emit(this.valueAdults);
  }
  private emitValueChangeChildren() {
    this.valueChangeChildren.emit(this.valueChildren);
  }

  availabilities = new FormControl('');
  availabilityList: string[] = ['Outdoor Patio', 'Party Room', 'Private Dining Room', 'Live Music', 'Catering Services', 'Wine Tastings'];

  isChecked = true;

  favoriteSeason: string | undefined;

  dialogRef: MatDialogRef<any> | null = null; // Initialize as null
  constructor(private dialog: MatDialog) { }

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
