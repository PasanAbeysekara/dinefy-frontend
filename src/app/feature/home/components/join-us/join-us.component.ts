import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {PromotionsService} from "../../../../services/promotions.service";

@Component({
  selector: 'app-join-us',
  standalone: true,
  templateUrl: './join-us.component.html',
  imports: [
    MatButtonModule
  ],
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  // constructor(private http:HttpClient, private promotionsService:PromotionsService) { }


  ngOnInit(): void {
  }

}
