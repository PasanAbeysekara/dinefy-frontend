import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-upcoming-reserve',
  standalone: true,
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        NgbRating
    ],
  templateUrl: './upcoming-reserve.component.html',
  styleUrl: './upcoming-reserve.component.css'
})
export class UpcomingReserveComponent {
  rating = 4;
}
