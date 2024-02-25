import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-images',
  standalone: true,
  imports: [
  ],
  templateUrl: './product-images.component.html',
  styleUrl: './product-images.component.css'
})
export class ProductImagesComponent implements OnInit{
  images: String[] = [];

  ngOnInit() {
    // Set items array
    this.images = [
      "https://d3plttq4n63nzt.cloudfront.net/machn-1",
      "https://d3plttq4n63nzt.cloudfront.net/machn-2",
      "https://d3plttq4n63nzt.cloudfront.net/machn-3",
      "https://d3plttq4n63nzt.cloudfront.net/machn-4",
      "https://d3plttq4n63nzt.cloudfront.net/machn-5",
      "https://d3plttq4n63nzt.cloudfront.net/machn-6"
  ];
  }
}
