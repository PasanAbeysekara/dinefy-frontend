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
      "https://lh3.googleusercontent.com/p/AF1QipPli3GgtZ83UmGvqbDHJgYqIYOa78YckL5Jj2KB=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipO2aDqT9Hxka-v5oVfkLUfrVfAO-D5Vjz4rTN8R=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNPKTROB5QPdERdb7gWTRoJPp9AZOokOaxbw6XV=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOv-tiZh9oLnxBuGLC_VAxGgq5gIv9IMrcyM6aQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNk-UtcMD9ol1cm31bhMejfCMMjA6RnPnWoVJWi=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMQIhyp1s6KeruzJLHqBJVMpjyaMF7g-7zmgLn3=s680-w680-h510"
  ];
  }
}
