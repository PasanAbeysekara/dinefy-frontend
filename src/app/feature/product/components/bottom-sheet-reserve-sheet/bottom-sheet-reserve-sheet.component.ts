import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
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
import {ActivatedRoute, Router} from "@angular/router";
import {ViewportRuler} from "@angular/cdk/scrolling";
import {ErgMenuComponent} from "../erg-menu/erg-menu.component";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ProductService} from "../../../../services/product.service";
import {SkeletonModule} from "primeng/skeleton";
import {restaurant} from "ionicons/icons";
import { LoginService } from "../../../../services/login.service";
import { LoginComponent } from '../../../home/components/login/login.component';

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
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, NgbDropdown, NgbDropdownMenu, NgbDropdownToggle, MatAutocompleteModule, ReactiveFormsModule, MatSelectModule, MatRadioModule, ErgMenuComponent, NgIf, SkeletonModule
  ],
  templateUrl: './bottom-sheet-reserve-sheet.component.html',
  styleUrl: './bottom-sheet-reserve-sheet.component.css',
  providers: [LoginService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})

export class BottomSheetReserveSheetComponent implements OnInit {
  @Input() valueAdults: number = 0;
  @Output() valueChangeAdults = new EventEmitter<number>();
  @Input() valueChildren: number = 0;
  @Output() valueChangeChildren = new EventEmitter<number>();

  public availabilities = new FormControl('');
  public availabilityList: string[] = [];
  public isChecked = true;
  public favoriteSeason: string | undefined;
  public selectedDate: Date | null = null; // This will be a Date object
  public selectedSeatType: string = 'Seat'; // Default to 'Seat'
  public dialogRef: MatDialogRef<any> | null = null;
  public isLoading: boolean = true;
  public propCode: string = "";
  public restaurant:any;

  constructor(
    public loginService: LoginService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private productService: ProductService,
    private httpClient: HttpClient, // Inject HttpClient
    private sanitizer: DomSanitizer
  ) {}

  onDateChange(event: any): void {
    this.selectedDate = event.value;
  }

// Helper method to pad numbers
  pad(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }

  // Format date as YYYY-MM-DD
  formatDate(date: Date | null): string {
    if (date) {
      return `${date.getFullYear()}-${this.pad(date.getMonth() + 1)}-${this.pad(date.getDate())}`;
    }
    return '';
  }

  // Assuming favoriteSeason is like '1PM', '10AM' etc.
  formatTime(time: string | undefined): string {
    if (time) {
      const period = time.substring(time.length - 2);
      let hour = parseInt(time.substring(0, time.length - 2));
      if (period === 'PM' && hour < 12) {
        hour += 12; // Convert PM hour to 24-hour format except for 12 PM
      } else if (period === 'AM' && hour === 12) {
        hour = 0; // Midnight case
      }
      return `${this.pad(hour)}:00:00`; // Return time in 'HH:00:00' format
    }
    return '00:00:00'; // Default time if undefined
  }

  incrementAdults() {
    this.valueAdults++;
    this.emitValueChangeAdults();
  }

  decrementAdults() {
    if (this.valueAdults > 0) {
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
    this.valueChangeAdults.emit(this.valueAdults);
  }

  private emitValueChangeChildren() {
    this.valueChangeChildren.emit(this.valueChildren);
  }

  openReserveWindow():void{
    const formattedDate = this.formatDate(this.selectedDate); // Formats date to 'YYYY-MM-DD'
              const formattedTime = this.formatTime(this.favoriteSeason); // Formats time to 'HH:00:00'
          
              const payload = {
                propId:this.restaurant.propId,
                availableUnitId: this.availabilities.value ? this.availabilityList.indexOf(this.availabilities.value) + 1 : 1,
                date: formattedDate,
                time: formattedTime,
                status: 'Pending',
                headCount: this.valueAdults + this.valueChildren,
                option1: this.selectedSeatType,
                reserveCode:generateReserveCode(this.restaurant.propId,"2024")
            }
      
            const restuData = this.restaurant;
      
            // this.httpClient.post('http://localhost:8081/res/reservations', payload).subscribe({
            //   next: (response) => console.log('Reservation successful', response),
            //   error: (error) => console.error('Error making reservation', error)
            // });
        
            const isSmallScreen = window.innerWidth < 600;
            this.dialogRef = this.dialog.open(ReserveModalComponent, {
              width: isSmallScreen ? '100%' : '60%',
              panelClass: ['modal--medium', 'modal--stepper'],
              data: {restaurantDatas:restuData,reservationPayload: payload}
            });
        
            this.dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
            });
  }

  reserve(): void {

    if(!this.loginService.getIsLoggedIn())
      {
        const dialogRef = this.dialog.open(LoginComponent, {
          panelClass: ['modal--small', 'user-modal'],
          data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
          if(this.loginService.getIsLoggedIn())
            {
              this.openReserveWindow();
            };
        });
    
      }
    else if(this.loginService.getIsLoggedIn())
      {
        this.openReserveWindow();
      };

   
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.propCode = params['propCode'];
    });

    this.productService.getProductByCode(this.propCode).subscribe((data: any) => {
      this.availabilityList = data.data.availabilityUnits.map((avail: any) => avail.name);
      this.restaurant = data.data;
      this.isLoading = false;
    });
  }
}

function generateReserveCode(reservationId: number, year: string): string {
  const randomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const randomNumber = () => Math.floor(1000 + Math.random() * 9000).toString();
  return `${year}${randomLetter()}${randomLetter()}-${randomNumber()}-${reservationId}`;
}
