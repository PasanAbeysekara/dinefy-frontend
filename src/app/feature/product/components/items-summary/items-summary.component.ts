import {Component, Input, OnInit} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-items-summary',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './items-summary.component.html',
  styleUrl: './items-summary.component.css'
})
export class ItemsSummaryComponent implements OnInit{
  @Input() restaurantData: any;
  @Input() reservationData:any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.restaurantData);
    console.log(this.reservationData);
  }
}
