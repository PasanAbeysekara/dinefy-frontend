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

export class LoginComponent {

  username: string = '';
  password: string = '';
  authenticationError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private loginService: LoginService,
    private authService: AuthService, // Inject the AuthService
    private router: Router,
    private dialog: MatDialog
   ) {}

 async onClick(username: string, password: string): Promise<void> {
    try {
     const token = await this.authService.login(username, password);

      if (token) {
        this.dialogRef.close();
        //this.router.navigate(['/profile']);
        this.loginService.setIsLogged(true);
        this.loginService.setJwtToken(token);
      } else {
        this.authenticationError = true;
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

  }

  signInWithGoogle(): void {

  }

  loginWithFacebook(): void {


  }


  openRegisterDialog(): void {
    this.dialogRef.close();
    this.dialog.open(RegisterComponent);
  }
}
