import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatRippleModule,
    NgbRatingModule
  ],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css'
})
export class HistoryCardComponent {
  rating = 0;
}
