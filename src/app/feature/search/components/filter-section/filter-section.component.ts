import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {CustomComponent} from "../../../../shared/search-widget/custom/custom.component";
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {
  NgbDropdown,
  NgbDropdownMenu, NgbDropdownModule,
  NgbDropdownToggle,
  NgbTypeahead, NgbTypeaheadConfig,
  NgbTypeaheadModule
} from "@ng-bootstrap/ng-bootstrap";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {JsonPipe, NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {Observable, OperatorFunction} from "rxjs";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {FacilityService} from "../../../../services/facility.service";
import {TagService} from "../../../../services/tag.service";

interface Restaurant {
  name: string;
  amount?: number;
  avgRating?: number;
  totalRating?: number;
}

const states = [...new Set(["Colombo", "Dehiwala", "Mount Lavinia", "Nugegoda", "Rajagiriya", "Battaramulla", "Kotte", "Malabe", "Maharagama", "Moratuwa", "Panadura", "Negombo", "Gampaha", "Kadawatha", "Kandy", "Peradeniya", "Katunayake", "Wattala", "Ja-Ela", "Ragama", "Kelaniya", "Peliyagoda", "Kaduwela", "Homagama", "Pannipitiya", "Boralesgamuwa", "Athurugiriya", "Kurunegala", "Galle", "Matara", "Hikkaduwa", "Kalutara", "Ambalangoda", "Gampola", "Nuwara Eliya", "Badulla", "Bandarawela", "Ratnapura", "Kegalle", "Avissawella", "Haputale", "Ella", "Tangalle", "Tissamaharama", "Ampara", "Trincomalee", "Batticaloa", "Jaffna", "Vavuniya", "Mannar", "Anuradhapura", "Polonnaruwa", "Dambulla", "Sigiriya", "Kurunegala", "Chilaw", "Puttalam", "Anuradhapura", "Polonnaruwa", "Dambulla", "Sigiriya", "Tissamaharama", "Hambantota", "Ambalantota", "Monaragala", "Weligama", "Ambalangoda", "Matugama", "Kalutara", "Horana", "Panadura", "Beruwala", "Bentota", "Aluthgama", "Koggala", "Hikkaduwa", "Ahangama", "Weligama", "Mirissa", "Dickwella", "Tangalle", "Ambalantota", "Tissamaharama", "Kataragama", "Ampara", "Kalmunai", "Batticaloa", "Arugam Bay", "Trincomalee", "Nilaveli", "Jaffna", "Kilinochchi", "Vavuniya", "Mannar", "Puttalam", "Chilaw", "Kuliyapitiya", "Kurunegala", "Nikaweratiya", "Mawanella", "Hatton", "Nawalapitiya", "Ginigathhena", "Maskeliya", "Nuwara Eliya", "Bandarawela", "Haputale", "Badulla", "Ella", "Mahiyangana", "Ampara", "Monaragala", "Buttala", "Embilipitiya", "Ratnapura", "Balangoda", "Pelmadulla", "Embilipitiya", "Pelmadulla", "Embilipitiya", "Ratnapura", "Balangoda", "Pelmadulla", "Embilipitiya", "Matara", "Akuressa", "Deniyaya", "Matara", "Kamburugamuwa", "Thihagoda", "Devinuwara", "Dikwella", "Tangalle", "Beliatta", "Hambantota", "Ambalantota", "Tissamaharama", "Kataragama", "Udawalawe", "Embilipitiya", "Monaragala", "Bibile", "Ampara", "Kalmunai", "Batticaloa", "Valaichchenai", "Trincomalee", "Nilaveli", "Kuchchaveli", "Rajagama", "Divulapitiya", "Katana", "Seeduwa", "Mahara", "Kahathuduwa", "Kottawa", "Piliyandala", "Padukka", "Kesbewa", "Kahawatta", "Balangoda", "Godakawela", "Eheliyagoda", "Rakwana", "Nivitigala", "Agalawatta", "Palindanuwara", "Bandaragama", "Wadduwa", "Waskaduwa", "Lunawa", "Ratmalana", "Angoda", "Maharagama", "Mount Lavinia", "Attidiya", "Rathmalgoda", "Padukka", "Pamunugama", "Kochchikade", "Wennappuwa", "Marawila", "Chilaw", "Madampe", "Mundalama", "Anamaduwa", "Nawagattegama", "Kuliyapitiya", "Narammala", "Nikaweratiya", "Polgahawela", "Panduwasnuwara", "Mawathagama", "Giriulla", "Dankotuwa", "Nattandiya", "Alawwa", "Warakapola", "Mawanella", "Aranayake", "Rambukkana", "Ruwanwella", "Doluwa", "Galewela", "Inamaluwa"])];

@Component({
  selector: 'app-filter-section',
  standalone: true,
  imports: [
    MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatCheckboxModule, ReactiveFormsModule,
    NgbTypeaheadModule, FormsModule, JsonPipe, BsDatepickerModule, NgxMaterialTimepickerModule, MatIconModule, MatButtonModule, NgbDropdownModule,
    CustomComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, NgForOf],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.css',
  providers: [NgbTypeaheadConfig],
})

export class FilterSectionComponent implements OnInit{
  model: any;
  facilities = new FormControl('');
  facilityList: string[] = [];
  tags = new FormControl('');
  tagList: string[] = [];
  sortOptionList: string[] = ['Sort By Price' , 'Sort By Rating' , 'Sort By Popularity'];
  searchResultRestaurantList:any;
  viewRestaurantList:any;
  sortBy = new FormControl('');
  hide = true;

  minValue: any;
  maxValue: any;

  openDialogPrice(): void {
    const dialogRef = this.dialog.open(DialogPrice, {
      width: '450px',
      data: {
        minValue: 2000,
        maxValue: 4000,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.minValue && result.maxValue) {
        // console.log('Min value:', result.minValue);
        // console.log('Max value:', result.maxValue);
        this.minValue = result.minValue;
        this.maxValue = result.maxValue;
      }
    });
  }

  constructor(private router: Router, public dialog: MatDialog, config: NgbTypeaheadConfig, private facilityService: FacilityService, private tagService: TagService) {
    config.showHint = true;
  }

  applyFilters(): void {

    // console.log('applyFilters Min value:', this.minValue);
    // console.log('applyFilters Max value:', this.maxValue);

    // alert(this.minValue+" "+this.maxValue);

    try {
      const searchResultJson = localStorage.getItem("searchResultRestaurantList");
      if (searchResultJson) {
        this.searchResultRestaurantList = JSON.parse(searchResultJson);
        this.viewRestaurantList = [...this.searchResultRestaurantList];
      }
    } catch (error) {
      console.error("Failed to parse restaurant list from localStorage", error);
    }

    const selectedFacilities = Array.isArray(this.facilities.value) ? this.facilities.value : [this.facilities.value].filter(Boolean);
    const selectedTags = Array.isArray(this.tags.value) ? this.tags.value : [this.tags.value].filter(Boolean);

    this.viewRestaurantList = this.searchResultRestaurantList.filter((item: { facilities: any[]; tags: any[]; }) => {
      let facilitiesMatch = selectedFacilities.length === 0 || selectedFacilities.some(facility => item.facilities.map(each => each.description).includes(facility));
      let tagsMatch = selectedTags.length === 0 || selectedTags.some(tag => item.tags.map(each => each.name).includes(tag));
      console.log("selectedFacilities.length, selectedTags.length",selectedFacilities.length, selectedTags.length);
      if(selectedFacilities.length === 0 && selectedTags.length === 0) {
        console.log("res",true);
        return true;
      }
      else if(selectedFacilities.length === 0 && selectedTags.length!==0){
        console.log("res tagsMatch",tagsMatch)
        return tagsMatch;
      }
      else if(selectedFacilities.length !== 0 && selectedTags.length===0){
        console.log("res facilitiesMatch",facilitiesMatch);
        return facilitiesMatch;
      }
      console.log("res facilitiesMatch && tagsMatch",facilitiesMatch && tagsMatch);
      return facilitiesMatch && tagsMatch;
    });

    // Sorting logic
    switch (this.sortBy.value) {
      case "Sort By Price":
        this.viewRestaurantList.sort((a: Restaurant, b: Restaurant) => (b.amount || 0) - (a.amount || 0));
        break;
      case "Sort By Rating":
        this.viewRestaurantList.sort((a: Restaurant, b: Restaurant) => (b.avgRating || 0) - (a.avgRating || 0));
        break;
      case "Sort By Popularity":
        this.viewRestaurantList.sort((a: Restaurant, b: Restaurant) => (b.totalRating || 0) - (a.totalRating || 0));
        break;
    }

    // Price Logic
    if(this.minValue && this.maxValue) {
      this.viewRestaurantList = this.viewRestaurantList.filter((item: { amount: number; }) => item.amount >= this.minValue && item.amount <= this.maxValue);
    }

    localStorage.setItem("viewRestaurantList", JSON.stringify(this.viewRestaurantList));
    localStorage.setItem("isFilterClicked", "yes");
    localStorage.setItem("selectedFacilities", JSON.stringify(selectedFacilities));
    localStorage.setItem("selectedTags", JSON.stringify(selectedTags));
    window.location.reload();

  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : states.filter((v) => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10),
      ),
    );

  ngOnInit(): void {
    this.facilityService.getAllFacilities().subscribe((data:any)=>{
      this.facilityList = data.data.content.map((each: { description: string; }) => each.description);
    })
    this.tagService.getAllTags().subscribe((data:any)=>{
      this.tagList = data.data.content.map((each: { name: string; }) => each.name);
    })

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DialogPrice>) {
    console.log('minValue value:', this.data.minValue);
    console.log('maxValue value:', this.data.maxValue);
  }

  updateSlider() {
    this.minValue = Math.min(this.minValue, this.maxValue);
    this.maxValue = Math.max(this.minValue, this.maxValue);
    this.sliderValue = this.minValue;
  }

}
