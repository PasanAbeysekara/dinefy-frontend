import { Component } from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {MatInputModule} from "@angular/material/input";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatRippleModule,
    NgForOf,
    NgbRating,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class SettingsComponent {

}
