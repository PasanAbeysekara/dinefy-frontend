import {Component, signal} from '@angular/core';
import {ProductComponent} from "../../product/product/product.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {Router, RouterLink} from "@angular/router";
import {SearchWidgetComponent} from "../../../shared/search-widget/search-widget.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormControl, FormsModule, ReactiveFormsModule,FormBuilder} from '@angular/forms';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {JsonPipe} from '@angular/common';
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {RestaurentResultComponent} from "../components/restaurent-result/restaurent-result.component";
import {SkeletonModule} from "primeng/skeleton";
import {PaginatorModule} from "primeng/paginator";
import {FilterSectionComponent} from "../components/filter-section/filter-section.component";


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatButtonToggleModule,
    SearchWidgetComponent,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatCheckboxModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    RestaurentResultComponent,
    SkeletonModule,
    RouterLink,
    PaginatorModule,
    FilterSectionComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})


export class SearchComponent {

  hide = true;
  constructor(private router: Router,public dialog: MatDialog) { }

  openDialogFilters(): void {
    this.dialog.open(DialogMoreFilter, {
      width: '450px',
    });
  }

  openDialogPrice(): void {
    this.dialog.open(DialogPrice, {
      width: '450px',
    });
  }

  redirectToRestaurant(){
    const linkToRedirect = '/product/rest-code-1'; // Replace with the actual link
    this.router.navigateByUrl(linkToRedirect);
  };

  facilities = new FormControl('');
  facilityList: string[] = ['Smoking', 'Vehicle Parking2', 'Vehicle Parking', 'Booze'];
  tags = new FormControl('');
  tagList: string[] = ['Sea View', 'Rooftop','Music'];
  sortOptionList: string[] = ['Sort By Price' , 'Sort By Rating' , 'Sort By Popularity'];

}
@Component({
  selector: 'dialog-more-filter',
  templateUrl: 'dialog-more-filter.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatCheckboxModule, FormsModule,ReactiveFormsModule, JsonPipe],
})

export class DialogMoreFilter {
  filters = this._formBuilder.group({
    filteroption1: false,
    filteroption2: false,
    filteroption3: false,
    filteroption4: false,
    filteroption5: false,
    filteroption6: false,
  });

  constructor(public dialogRef: MatDialogRef<DialogMoreFilter>,private _formBuilder: FormBuilder) {}

  clearFilters() {
    // Reset all checkboxes to their default state
    this.filters.reset();
  }

}
@Component({
  selector: 'dialog-price',
  templateUrl: 'dialog-price.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatCheckboxModule, FormsModule,ReactiveFormsModule, JsonPipe,
    MatFormFieldModule,
    MatSliderModule,MatInputModule, MatIconModule],
})

export class DialogPrice {
  hide = true;
  sliderValue: number = 0;
  minValue: number = 2000;
  maxValue: number = 4000;

  updateSlider() {
    // Ensure the min and max values are within bounds
    this.minValue = Math.min(this.minValue, this.maxValue);
    this.maxValue = Math.max(this.minValue, this.maxValue);

    // Map the min and max values to the slider range
    this.sliderValue = this.minValue;
  }

  constructor(public dialogRef: MatDialogRef<DialogMoreFilter>,private _formBuilder: FormBuilder) {}

}
