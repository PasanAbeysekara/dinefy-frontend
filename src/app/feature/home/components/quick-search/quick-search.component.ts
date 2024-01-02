import { Component, OnInit } from '@angular/core';
import {MatRippleModule} from "@angular/material/core";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  standalone: true,
  imports: [
    MatRippleModule,
    RouterLink,
    MatIconModule
  ],
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
