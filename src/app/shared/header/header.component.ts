import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../feature/home/components/login/login.component';
import { RegisterComponent } from '../../feature/home/components/register/register.component';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';
import { LoginService } from "../../services/login.service";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    MatDialog,
    HeaderService,
    LoginService
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    RouterLink
  ]
})
export class HeaderComponent implements OnInit {
  headerClass: string = "";
  isTransparent = true;
  initialHeight = '100px'; // Set your initial height here

  constructor(private dialog: MatDialog, private headerData: HeaderService, public loginService: LoginService, private router: Router, private renderer: Renderer2) { }

  signin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: ['modal--small', 'user-modal'],
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  signup(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      panelClass: ['modal--small', 'user-modal'],
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit(): void {
    this.headerData.currentHeader.subscribe(headerClass => this.headerClass = headerClass);
  }

  logout() {
    this.loginService.setIsLogged(false);
    this.router.navigate(['/home']);
  }

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
