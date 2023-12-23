import { Component, OnInit } from '@angular/core';
import {SearchWidgetComponent} from "../../../../shared/search-widget/search-widget.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {green} from "@mui/material/colors";
import {MatIconModule} from "@angular/material/icon";
import {QuickSearchComponent} from "../quick-search/quick-search.component";
import {PromotionsComponent} from "../promotions/promotions.component";
import {RecommendationsComponent} from "../recommendations/recommendations.component";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  standalone: true,
  imports: [
    SearchWidgetComponent,
    MatButtonToggleModule,
    MatIconModule,
    QuickSearchComponent,
    PromotionsComponent,
    RecommendationsComponent,
    MatButtonModule
  ],
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly green = green;
}
