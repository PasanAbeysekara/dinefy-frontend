import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from "@angular/common";
import {
  NgbDropdownModule, NgbTypeaheadConfig,
  NgbTypeaheadModule
} from "@ng-bootstrap/ng-bootstrap";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { Observable, of, OperatorFunction } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import {CustomComponent} from "./custom/custom.component";

const states = [...new Set(["Colombo", "Dehiwala", "Mount Lavinia", "Nugegoda", "Rajagiriya", "Battaramulla", "Kotte", "Malabe", "Maharagama", "Moratuwa", "Panadura", "Negombo", "Gampaha", "Kadawatha", "Kandy", "Peradeniya", "Katunayake", "Wattala", "Ja-Ela", "Ragama", "Kelaniya", "Peliyagoda", "Kaduwela", "Homagama", "Pannipitiya", "Boralesgamuwa", "Athurugiriya", "Kurunegala", "Galle", "Matara", "Hikkaduwa", "Kalutara", "Ambalangoda", "Gampola", "Nuwara Eliya", "Badulla", "Bandarawela", "Ratnapura", "Kegalle", "Avissawella", "Haputale", "Ella", "Tangalle", "Tissamaharama", "Ampara", "Trincomalee", "Batticaloa", "Jaffna", "Vavuniya", "Mannar", "Anuradhapura", "Polonnaruwa", "Dambulla", "Sigiriya", "Kurunegala", "Chilaw", "Puttalam", "Anuradhapura", "Polonnaruwa", "Dambulla", "Sigiriya", "Tissamaharama", "Hambantota", "Ambalantota", "Monaragala", "Weligama", "Ambalangoda", "Matugama", "Kalutara", "Horana", "Panadura", "Beruwala", "Bentota", "Aluthgama", "Koggala", "Hikkaduwa", "Ahangama", "Weligama", "Mirissa", "Dickwella", "Tangalle", "Ambalantota", "Tissamaharama", "Kataragama", "Ampara", "Kalmunai", "Batticaloa", "Arugam Bay", "Trincomalee", "Nilaveli", "Jaffna", "Kilinochchi", "Vavuniya", "Mannar", "Puttalam", "Chilaw", "Kuliyapitiya", "Kurunegala", "Nikaweratiya", "Mawanella", "Hatton", "Nawalapitiya", "Ginigathhena", "Maskeliya", "Nuwara Eliya", "Bandarawela", "Haputale", "Badulla", "Ella", "Mahiyangana", "Ampara", "Monaragala", "Buttala", "Embilipitiya", "Ratnapura", "Balangoda", "Pelmadulla", "Embilipitiya", "Pelmadulla", "Embilipitiya", "Ratnapura", "Balangoda", "Pelmadulla", "Embilipitiya", "Matara", "Akuressa", "Deniyaya", "Matara", "Kamburugamuwa", "Thihagoda", "Devinuwara", "Dikwella", "Tangalle", "Beliatta", "Hambantota", "Ambalantota", "Tissamaharama", "Kataragama", "Udawalawe", "Embilipitiya", "Monaragala", "Bibile", "Ampara", "Kalmunai", "Batticaloa", "Valaichchenai", "Trincomalee", "Nilaveli", "Kuchchaveli", "Rajagama", "Divulapitiya", "Katana", "Seeduwa", "Mahara", "Kahathuduwa", "Kottawa", "Piliyandala", "Padukka", "Kesbewa", "Kahawatta", "Balangoda", "Godakawela", "Eheliyagoda", "Rakwana", "Nivitigala", "Agalawatta", "Palindanuwara", "Bandaragama", "Wadduwa", "Waskaduwa", "Lunawa", "Ratmalana", "Angoda", "Maharagama", "Mount Lavinia", "Attidiya", "Rathmalgoda", "Padukka", "Pamunugama", "Kochchikade", "Wennappuwa", "Marawila", "Chilaw", "Madampe", "Mundalama", "Anamaduwa", "Nawagattegama", "Kuliyapitiya", "Narammala", "Nikaweratiya", "Polgahawela", "Panduwasnuwara", "Mawathagama", "Giriulla", "Dankotuwa", "Nattandiya", "Alawwa", "Warakapola", "Mawanella", "Aranayake", "Rambukkana", "Ruwanwella", "Doluwa", "Galewela", "Inamaluwa"])];

@Component({
  selector: 'app-search-widget',
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule, JsonPipe, BsDatepickerModule, NgxMaterialTimepickerModule, MatIconModule, MatButtonModule, NgbDropdownModule, CustomComponent],
  templateUrl: './search-widget.component.html',
  styleUrl: './search-widget.component.css',
  providers: [NgbTypeaheadConfig],
})

export class SearchWidgetComponent {
  model: any;

  constructor(config: NgbTypeaheadConfig) {
    // customize default values of typeaheads used by this component tree
    config.showHint = true;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : states.filter((v) => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10),
      ),
    );
  // myControl = new FormControl('');
  // options: string[] = Array.from(new Set([
  //   'Colombo', 'Moratuwa', 'Negombo', 'Kandy',
  //   'Kalmunai', 'Vavuniya', 'Galle', 'Trincomalee', 'Batticaloa', 'Jaffna',
  //   'Katunayake', 'Dambulla', 'Gampaha', 'Kegalle', 'Ratnapura', 'Anuradhapura',
  //   'Badulla', 'Matara', 'Chavakachcheri', 'Jaffna', 'Battaramulla', 'Kotte',
  //   'Matara', 'Panadura', 'Ratnapura', 'Horana', 'Puttalam', 'Kuliyapitiya',
  //   'Chilaw', 'Wattala', 'Peliyagoda', 'Kelaniya', 'Kadawatha', 'Maharagama',
  //   'Nugegoda', 'Ja-Ela', 'Ampara', 'Battaramulla', 'Boralesgamuwa', 'Kaduwela',
  //   'Embilipitiya', 'Weligama', 'Kalutara', 'Beruwala', 'Ambalangoda', 'Hikkaduwa',
  //   'Mullaitivu', 'Mannar', 'Kilinochchi', 'Nuwara Eliya', 'Bandarawela', 'Haputale',
  //   'Tangalle', 'Monaragala', 'Akuressa', 'Homagama', 'Mahiyangana', 'Hambantota',
  //   'Kalpitiya', 'Matale', 'Narammala', 'Wellawaya', 'Ambalantota', 'Tissamaharama',
  //   'Amparai', 'Kattankudy', 'Nawalapitiya', 'Horowpathana', 'Panama', 'Wariyapola',
  //   'Galagedara', 'Maharagama', 'Matugama', 'Athurugiriya', 'Balangoda', 'Kegalle',
  //   'Gampola', 'Nawalapitiya', 'Nattandiya', 'Wennappuwa', 'Ambalangoda', 'Koggala',
  //   'Thalawakele', 'Neluwa', 'Pannala', 'Matale', 'Rambukkana', 'Hunupitiya',
  //   'Kottawa', 'Kohuwala', 'Pitakotte', 'Ambalangoda', 'Hikkaduwa', 'Hingurakgoda',
  //   'Pottuvil', 'Ampara', 'Dambulla', 'Polonnaruwa', 'Wattegama', 'Wariyapola',
  //   'Ambalangoda', 'Elpitiya', 'Ambalantota', 'Kuliyapitiya', 'Dankotuwa', 'Kurunegala',
  //   'Matale', 'Weligama', 'Deniyaya', 'Horana', 'Maharagama', 'Wadduwa', 'Athurugiriya',
  //   'Kosgoda', 'Kottawa', 'Homagama', 'Kalutara', 'Kandana', 'Maharagama', 'Nugegoda',
  //   'Pannipitiya', 'Peliyagoda', 'Ratmalana', 'Wattala', 'Wattegama', 'Weligama',
  //   'Baddegama', 'Matara', 'Akuressa', 'Tangalle', 'Ambalangoda', 'Hikkaduwa', 'Kalutara',
  //   'Beruwala', 'Dodangoda', 'Horana', 'Ingiriya', 'Agalawatta', 'Bulathsinhala', 'Pelmadulla',
  //   'Rakwana', 'Eheliyagoda', 'Ginigathhena', 'Hatton', 'Kotagala', 'Maskeliya', 'Nuwara Eliya',
  //   'Talawakelle', 'Kandapola', 'Nanu-Oya', 'Ramboda', 'Walapane', 'Ambagamuwa', 'Haputale',
  //   'Koslanda', 'Thalawakale', 'Welimada', 'Buttala', 'Kataragama', 'Wellawaya', 'Monaragala',
  //   'Badulla', 'Bandarawela', 'Ella', 'Mahiyangana', 'Arugam Bay', 'Batticaloa', 'Chenkalady',
  //   'Eravur', 'Kalkudah', 'Valaichchenai', 'Kalmunai', 'Ampara', 'Pottuvil', 'Borella', 'Colombo',
  //   'Dehiwala-Mount Lavinia', 'Kotte', 'Battaramulla', 'Rajagiriya', 'Moratuwa', 'Piliyandala',
  //   'Kaduwela', 'Nugegoda', 'Kelaniya', 'Maharagama', 'Ja-Ela', 'Wattala', 'Negombo', 'Peliyagoda',
  //   'Kandana', 'Katunayake', 'Minuwangoda', 'Divulapitiya', 'Gampaha', 'Veyangoda', 'Mirigama',
  //   'Attidiya', 'Angoda', 'Athurugiriya', 'Battaramulla', 'Boralesgamuwa', 'Colombo 1', 'Colombo 2',
  //   'Colombo 3', 'Colombo 4', 'Colombo 5', 'Colombo 6', 'Colombo 7', 'Colombo 8', 'Colombo 9',
  //   'Colombo 10', 'Colombo 11', 'Colombo 12', 'Colombo 13', 'Colombo 14', 'Colombo 15', 'Dekatana',
  //   'Delgoda', 'Dematagoda', 'Gothatuwa', 'Hokandara', 'Kaduwela', 'Kahathuduwa', 'Kesbewa',
  //   'Kiribathgoda', 'Kolonnawa', 'Koswatte', 'Malabe', 'Mulleriyawa', 'Padukka', 'Pannipitiya',
  //   'Pita Kotte', 'Rajagiriya', 'Sri Jayawardenepura Kotte', 'Thalahena', 'Udahamulla',
  //   'Pamankada', 'Nugegoda', 'Dehiwala', 'Mount Lavinia', 'Attidiya', 'Bellanwila', 'Boralesgamuwa',
  //   'Dehiwala', 'Delkanda', 'Galkissa', 'Kalubowila', 'Kohuwala', 'Madapatha', 'Maharagama', 'Mount Lavinia',
  //   'Nedimala', 'Nugegoda', 'Pelawatte', 'Piliyandala', 'Ratmalana', 'Rawatawatte', 'Wellawatte'
  // ]));

  search_what: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );

  search_where: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );
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
}
