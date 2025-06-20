import { Component, OnInit } from '@angular/core';
import {SearchWidgetComponent} from "../../../../shared/search-widget/search-widget.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {green} from "@mui/material/colors";
import {MatIconModule} from "@angular/material/icon";
import {QuickSearchComponent} from "../quick-search/quick-search.component";
import {PromotionsComponent} from "../promotions/promotions.component";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";

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
    MatButtonModule
  ],
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  redirectToSearchResults(){
    this.router.navigate(['/search']);
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  protected readonly green = green;
}
