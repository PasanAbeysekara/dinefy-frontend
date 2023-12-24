import {Component, signal} from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {Router} from "@angular/router";
import {SearchWidgetComponent} from "../../../shared/search-widget/search-widget.component";
import {QuickSearchComponent} from "../components/quick-search/quick-search.component";
import {MatIconModule} from "@angular/material/icon";
import {green} from "@mui/material/colors";
import {PromotionsComponent} from "../components/promotions/promotions.component";
import {RecommendationsComponent} from "../components/recommendations/recommendations.component";
import {OtherPlacesComponent} from "../components/other-places/other-places.component";
import {BackgroundComponent} from "../components/background/background.component";
import {JoinUsComponent} from "../components/join-us/join-us.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchWidgetComponent,
    MatButtonToggleModule,
    MatIconModule,
    QuickSearchComponent,
    PromotionsComponent,
    RecommendationsComponent,
    OtherPlacesComponent,
    BackgroundComponent,
    JoinUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly green = green;
}

