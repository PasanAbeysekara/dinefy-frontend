import {ChangeDetectorRef, Component} from '@angular/core';
import {MatDividerModule} from "@angular/material/divider";
import {NgbRating, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import { SkeletonModule } from 'primeng/skeleton';
import {NgForOf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [
    MatDividerModule,
    NgbRating,
    SkeletonModule,
    NgForOf,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.css',
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class ProductReviewComponent {
  constructor(public changeDetectorRef: ChangeDetectorRef, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  data = [
    {
      name: 'John Doe',
      rating: 4,
      reviews: 1402,
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
    },
    {
      name: 'John Doe',
      rating: 4,
      reviews: 1402,
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
    },
    {
      name: 'John Doe',
      rating: 4,
      reviews: 1402,
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
    },
    {
      name: 'John Doe',
      rating: 4,
      reviews: 1402,
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
    },
  ];

}
