import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../feature/home/components/login/login.component';
import { RegisterComponent } from '../../feature/home/components/register/register.component';
import { HeaderService } from './header.service';
import {Router, RouterLinkActive} from '@angular/router';
import { LoginService } from "../../services/login.service";
import { GoogleApiService, UserInfo } from "../../services/google-api.service";
import { AuthService } from "../../services/auth.service";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatListModule } from '@angular/material/list';
import {MatLineModule, MatRippleModule} from "@angular/material/core";
import { BehaviorSubject, Subject, interval, takeUntil } from 'rxjs';

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
  initialHeight = '100px'; 
  userInfo?: UserInfo;
  cacheBuster?: number;
  name?: string;
  email?: string;

  isLoggedInSubject = new BehaviorSubject<boolean>(false); 
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  
  destroy$ = new Subject<void>();

  redirectToUserProfile(){
    this.router.navigate(['/userprofile']);
  }

  constructor(
    private dialog: MatDialog,
    private headerData: HeaderService,
    public loginService: LoginService,
    private authService: AuthService,
    private readonly googleApiService: GoogleApiService,
    private router: Router,
    private renderer: Renderer2) {}

    async ngOnInit() {
      await this.googleApiService.initializeGoogleAuth();
      if(!this.googleApiService.isLoggedIn()){
        this.authService.autoLogin();
      }
      
      await this.loadHeader();

      if(this.googleApiService.isLoggedIn()){
        this.authService.userInfo$.subscribe(userInfo => {  
          if (userInfo !== null) {
            this.authService.register(userInfo.info.firstName, userInfo.info.lastName, userInfo.info.email, '').subscribe(
              (response) => {
                          if (response === 'Username already exists') {
                            
                          }
              },
              (error) => {
                  console.error(error);
              }
            );
          } 
        });
  
        
      }
      
      this.isLoggedInSubject.next(this.loginService.getIsLoggedIn());

      interval(1000) 
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          const updatedIsLoggedIn = this.loginService.getIsLoggedIn();
          if ((updatedIsLoggedIn !== this.isLoggedInSubject.getValue()) && !this.googleApiService.isLoggedIn()) {
            this.isLoggedInSubject.next(updatedIsLoggedIn);
            this.loadHeader();
          }
        });
    }

  signin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: ['modal--small', 'user-modal'],
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  signup(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      panelClass: ['modal--small', 'user-modal'],
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  async loadHeader(): Promise<void>  {
    if(this.googleApiService.isLoggedIn())
      {
        this.loginService.setIsLogged(true);
        this.authService.userInfo$.subscribe(userInfo => {
          
          if (userInfo !== null) {
            this.userInfo = userInfo;
          } 
          this.cacheBuster = Math.random();
        });
        return;
      }
      
    await this.authService.setUserInfoFromToken();
    this.authService.userInfo$.subscribe(userInfo => {
      if (userInfo !== null) {
        this.userInfo = userInfo;
      } 
      this.cacheBuster = Math.random();
    });

      /*  this.googleApiService.userProfileSubject.subscribe( info => {
                  this.userInfo = info;
                  this.cacheBuster = Math.random();
                }) */

    this.headerData.currentHeader.subscribe(headerClass => this.headerClass = headerClass);
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
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
