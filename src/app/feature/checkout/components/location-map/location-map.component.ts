import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Loader } from "@googlemaps/js-api-loader"
@Component({
  selector: 'app-location-map',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './location-map.component.html',
  styleUrl: './location-map.component.css'
})
export class LocationMapComponent implements OnInit {
  ngOnInit(): void {
    const loader = new Loader({
      apiKey: "AIzaSyB9YW2S28ZqC_2BzeUbzjvacQQD0PC5bqQ",
      version: "weekly",
    });


    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 6.801, lng: 79.9306 },
        zoom: 16,  // Adjust the zoom level as needed
      });
    });

  }
}
