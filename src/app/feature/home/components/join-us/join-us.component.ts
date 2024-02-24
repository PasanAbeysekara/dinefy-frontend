import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

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

  constructor() { }

  ngOnInit(): void {
  }

}
