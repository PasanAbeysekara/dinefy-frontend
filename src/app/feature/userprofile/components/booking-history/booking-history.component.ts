import { Component } from '@angular/core';
import {HistoryCardComponent} from "./history-card/history-card.component";

@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [
    HistoryCardComponent
  ],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.css'
})
export class BookingHistoryComponent {

}
