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
import {SearchService} from "../../../services/search.service";
import {ProductService} from "../../../services/product.service";


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
    NgIf
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})


export class SearchComponent implements OnInit{

  searchResultRestaurantList: any;

  constructor(private productService: ProductService,private router: Router,public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      console.log("params['where']",params['where']);
      // this.searchService.getPropertyByCity(params['where']).subscribe((data: any) => {
      //   // this.searchResultRestaurantList =  data;
      //   // console.log("searchResultRestaurantList",this.searchResultRestaurantList);
      //   console.log("QQQQQQQQQQQQQQQ");
      //   console.log("data", data);
      //   console.log("Wwwwwwwwwwwwwwwww");
      // });

     this.productService.getAllProducts().subscribe((data:any)=>{
       console.log(params['where'], "searching began");
       this.searchResultRestaurantList = data.filter((product: { basedLocation: { name: string; }; }) => product.basedLocation.name === params['where']);
       console.log(params['where'], "searching end");
       console.log("this.productsByCityList",this.searchResultRestaurantList);
     })

    });
  }

}
