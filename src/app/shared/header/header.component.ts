import {Component, HostListener, Renderer2} from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isTransparent = true;
  initialHeight = '100px'; // Set your initial height here

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    this.isTransparent = scrollY < 70; // Adjust this threshold as needed

    // Update the height dynamically based on scroll position
    const newHeight = this.isTransparent ? this.initialHeight : '70px'; // Set the desired half height
    this.renderer.setStyle(
      document.querySelector('header'),
      'height',
      newHeight
    );
  }
}

