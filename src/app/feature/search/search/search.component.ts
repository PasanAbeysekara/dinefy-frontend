import {Component, OnInit, signal} from '@angular/core';
import {ProductComponent} from "../../product/product/product.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
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
import {JsonPipe, NgForOf, NgIf} from '@angular/common';
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {RestaurentResultComponent} from "../components/restaurent-result/restaurent-result.component";
import {SkeletonModule} from "primeng/skeleton";
import {PaginatorModule} from "primeng/paginator";
import {FilterSectionComponent} from "../components/filter-section/filter-section.component";
import {ProductService} from "../../../services/product.service";
import {LocationService} from "../../../services/location.service";
import {ResultRestaurantsComponent} from "../components/result-restaurants/result-restaurants.component";


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
    FilterSectionComponent,
    NgForOf,
    NgIf,
    ResultRestaurantsComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})


export class SearchComponent implements OnInit{

  searchResultRestaurantList: any;
  viewRestaurantList: any;

  constructor(private locationService: LocationService,private productService: ProductService,private router: Router,public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {

    if(localStorage.getItem("isFilterClicked")=="yes"){
      localStorage.setItem("isFilterClicked","no");
      // @ts-ignore
      this.viewRestaurantList = JSON.parse(localStorage.getItem("viewRestaurantList"));

    }
    else{
      this.route.queryParams.subscribe(params => {
        this.productService.getAllProducts().subscribe((data:any)=>{
          this.locationService.getLocationIdByName(params['where']).subscribe((locId:any)=>{
            // console.log("tempLocationId",locId)
            this.viewRestaurantList = data.filter((product: { basedLocationId: any; }) => product.basedLocationId === locId);
            // console.log("data",data);
            // console.log("this.viewRestaurantList",this.viewRestaurantList);
            this.searchResultRestaurantList = this.viewRestaurantList;
            localStorage.setItem("viewRestaurantList", JSON.stringify(this.viewRestaurantList));
            localStorage.setItem("searchResultRestaurantList", JSON.stringify(this.searchResultRestaurantList));
          });
        })
      });
    }
  }

}
