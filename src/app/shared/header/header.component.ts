import {Component, HostListener, OnInit, Renderer2, signal} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../feature/home/components/login/login.component';
import { RegisterComponent } from '../../feature/home/components/register/register.component';
import { HeaderService } from './header.service';
import {Router, RouterLinkActive} from '@angular/router';
import { LoginService } from "../../services/login.service";
import { GoogleApiService, UserInfo } from "../../services/google-api.service";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatListModule } from '@angular/material/list';
import {MatLineModule, MatRippleModule} from "@angular/material/core";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    MatDialog,
    HeaderService,
    LoginService,
    GoogleApiService
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    MatRippleModule,
    MatLineModule
  ]
})
export class HeaderComponent implements OnInit {
  headerClass: string = "";
  isTransparent = true;
  initialHeight = '100px'; // Set your initial height here
  userInfo?: UserInfo;
  cacheBuster?: number;

  redirectToUserProfile(){
    this.router.navigate(['/userprofile']);
  }

  constructor(
    private dialog: MatDialog,
    private headerData: HeaderService,
    public loginService: LoginService,
    private readonly googleApiService: GoogleApiService,
    private router: Router,
    private renderer: Renderer2) {
     googleApiService.userProfileSubject.subscribe( info => {
          this.userInfo = info
        })
  }

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
    this.googleApiService.initializeGoogleAuth().then(() => {
      this.loginService.setIsLogged(this.googleApiService.isLoggedIn());
      this.googleApiService.userProfileSubject.subscribe( info => {
            this.userInfo = info;
            this.cacheBuster = Math.random();
          })

      if(sessionStorage.getItem('logType') == 'normal')
      {
        //get first name, last name
      }

      })

    this.headerData.currentHeader.subscribe(headerClass => this.headerClass = headerClass);
  }

  logout() {
    this.loginService.setIsLogged(false);
    sessionStorage.setItem('logType', '');
    this.googleApiService.signOut();
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
