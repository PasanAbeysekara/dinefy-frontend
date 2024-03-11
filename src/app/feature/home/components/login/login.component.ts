import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogClose} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { RegisterComponent } from '../register/register.component';
import {LoginService} from "../../../../services/login.service";
import { AuthService } from "../../../../services/auth.service";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GoogleApiService } from "../../../../services/google-api.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogContent,
    MatSelectModule,
    MatButtonModule,
    MatDialogClose,
    MatInputModule,
    FormsModule,
    CommonModule
  ]
})

export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  hide: boolean = true;
  authenticationError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private loginService: LoginService,
    private authService: AuthService, // Inject the AuthService
    private router: Router,
    private dialog: MatDialog,
    private googleApiService: GoogleApiService
   ) {}

  ngOnInit(): void {

  }

onClick(username: string, password: string): void {
  this.authService.login(username, password).subscribe(
    (token: string | null) => {
      if (token) {
       this.dialogRef.close();
       //this.router.navigate(['/profile']);
       this.loginService.setIsLogged(true);
       this.loginService.setToken(token);
      }
      else
      {
        this.authenticationError = true;
      }
    },
    (error) => {
      console.error('Login error:', error.message);
    }
  );
}

togglePasswordVisibility(): void {
  this.hide = !this.hide;
}

signInWithGoogle(): void {

  this.googleApiService.signIn();

}

signInWithFacebook(): void {
  this.authService.signInWithFacebook().subscribe(
    (response) => {
      // Handle successful response
    },
    (error) => {
      console.error('Facebook sign-in error:', error);
    }
  );
}


  openRegisterDialog(): void {
    this.dialogRef.close();
    this.dialog.open(RegisterComponent);
  }
}
