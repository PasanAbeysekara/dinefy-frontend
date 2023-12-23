import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from "@angular/material/icon";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-widget',
  standalone: true,
  imports: [
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    AsyncPipe,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    NgxMaterialTimepickerModule
  ],
  templateUrl: './search-widget.component.html',
  styleUrl: './search-widget.component.css'
})
export class SearchWidgetComponent {
  myControl = new FormControl('');
  options: string[] = Array.from(new Set([
    'Colombo', 'Moratuwa', 'Negombo', 'Kandy',
    'Kalmunai', 'Vavuniya', 'Galle', 'Trincomalee', 'Batticaloa', 'Jaffna',
    'Katunayake', 'Dambulla', 'Gampaha', 'Kegalle', 'Ratnapura', 'Anuradhapura',
    'Badulla', 'Matara', 'Chavakachcheri', 'Jaffna', 'Battaramulla', 'Kotte',
    'Matara', 'Panadura', 'Ratnapura', 'Horana', 'Puttalam', 'Kuliyapitiya',
    'Chilaw', 'Wattala', 'Peliyagoda', 'Kelaniya', 'Kadawatha', 'Maharagama',
    'Nugegoda', 'Ja-Ela', 'Ampara', 'Battaramulla', 'Boralesgamuwa', 'Kaduwela',
    'Embilipitiya', 'Weligama', 'Kalutara', 'Beruwala', 'Ambalangoda', 'Hikkaduwa',
    'Mullaitivu', 'Mannar', 'Kilinochchi', 'Nuwara Eliya', 'Bandarawela', 'Haputale',
    'Tangalle', 'Monaragala', 'Akuressa', 'Homagama', 'Mahiyangana', 'Hambantota',
    'Kalpitiya', 'Matale', 'Narammala', 'Wellawaya', 'Ambalantota', 'Tissamaharama',
    'Amparai', 'Kattankudy', 'Nawalapitiya', 'Horowpathana', 'Panama', 'Wariyapola',
    'Galagedara', 'Maharagama', 'Matugama', 'Athurugiriya', 'Balangoda', 'Kegalle',
    'Gampola', 'Nawalapitiya', 'Nattandiya', 'Wennappuwa', 'Ambalangoda', 'Koggala',
    'Thalawakele', 'Neluwa', 'Pannala', 'Matale', 'Rambukkana', 'Hunupitiya',
    'Kottawa', 'Kohuwala', 'Pitakotte', 'Ambalangoda', 'Hikkaduwa', 'Hingurakgoda',
    'Pottuvil', 'Ampara', 'Dambulla', 'Polonnaruwa', 'Wattegama', 'Wariyapola',
    'Ambalangoda', 'Elpitiya', 'Ambalantota', 'Kuliyapitiya', 'Dankotuwa', 'Kurunegala',
    'Matale', 'Weligama', 'Deniyaya', 'Horana', 'Maharagama', 'Wadduwa', 'Athurugiriya',
    'Kosgoda', 'Kottawa', 'Homagama', 'Kalutara', 'Kandana', 'Maharagama', 'Nugegoda',
    'Pannipitiya', 'Peliyagoda', 'Ratmalana', 'Wattala', 'Wattegama', 'Weligama',
    'Baddegama', 'Matara', 'Akuressa', 'Tangalle', 'Ambalangoda', 'Hikkaduwa', 'Kalutara',
    'Beruwala', 'Dodangoda', 'Horana', 'Ingiriya', 'Agalawatta', 'Bulathsinhala', 'Pelmadulla',
    'Rakwana', 'Eheliyagoda', 'Ginigathhena', 'Hatton', 'Kotagala', 'Maskeliya', 'Nuwara Eliya',
    'Talawakelle', 'Kandapola', 'Nanu-Oya', 'Ramboda', 'Walapane', 'Ambagamuwa', 'Haputale',
    'Koslanda', 'Thalawakale', 'Welimada', 'Buttala', 'Kataragama', 'Wellawaya', 'Monaragala',
    'Badulla', 'Bandarawela', 'Ella', 'Mahiyangana', 'Arugam Bay', 'Batticaloa', 'Chenkalady',
    'Eravur', 'Kalkudah', 'Valaichchenai', 'Kalmunai', 'Ampara', 'Pottuvil', 'Borella', 'Colombo',
    'Dehiwala-Mount Lavinia', 'Kotte', 'Battaramulla', 'Rajagiriya', 'Moratuwa', 'Piliyandala',
    'Kaduwela', 'Nugegoda', 'Kelaniya', 'Maharagama', 'Ja-Ela', 'Wattala', 'Negombo', 'Peliyagoda',
    'Kandana', 'Katunayake', 'Minuwangoda', 'Divulapitiya', 'Gampaha', 'Veyangoda', 'Mirigama',
    'Attidiya', 'Angoda', 'Athurugiriya', 'Battaramulla', 'Boralesgamuwa', 'Colombo 1', 'Colombo 2',
    'Colombo 3', 'Colombo 4', 'Colombo 5', 'Colombo 6', 'Colombo 7', 'Colombo 8', 'Colombo 9',
    'Colombo 10', 'Colombo 11', 'Colombo 12', 'Colombo 13', 'Colombo 14', 'Colombo 15', 'Dekatana',
    'Delgoda', 'Dematagoda', 'Gothatuwa', 'Hokandara', 'Kaduwela', 'Kahathuduwa', 'Kesbewa',
    'Kiribathgoda', 'Kolonnawa', 'Koswatte', 'Malabe', 'Mulleriyawa', 'Padukka', 'Pannipitiya',
    'Pita Kotte', 'Rajagiriya', 'Sri Jayawardenepura Kotte', 'Thalahena', 'Udahamulla',
    'Pamankada', 'Nugegoda', 'Dehiwala', 'Mount Lavinia', 'Attidiya', 'Bellanwila', 'Boralesgamuwa',
    'Dehiwala', 'Delkanda', 'Galkissa', 'Kalubowila', 'Kohuwala', 'Madapatha', 'Maharagama', 'Mount Lavinia',
    'Nedimala', 'Nugegoda', 'Pelawatte', 'Piliyandala', 'Ratmalana', 'Rawatawatte', 'Wellawatte'
  ]));
  // @ts-ignore
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  guestCount: number = 0;

  incrementGuestCount() {
    this.guestCount = Math.min(this.guestCount + 1, 10); // Adjust the maximum count as needed
  }

  decrementGuestCount() {
    this.guestCount = Math.max(this.guestCount - 1, 0);
  }

  constructor(private router: Router) {}
  redirectToSearchResults() {
    this.router.navigate(['/search-results']);
  }
}
