import { Component } from '@angular/core';
import {MatDialog, MatDialogClose, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {LoginService} from "../../../../services/login.service";
import {AuthService} from "../../../../services/auth.service";
import {GoogleApiService, UserInfo} from "../../../../services/google-api.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    MatButtonModule,
    MatDialogClose,
    MatIconModule,
    MatDialogContent,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ]
})

export class RegisterComponent
{
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  firstNameError: string = '';
  lastNameError: string = '';
  emailError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';
  userExistError: string = '';
  userInfo?: UserInfo;

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private googleApiService: GoogleApiService
  ) {}

  onClick(firstName: string, lastName: string, email: string, password: string, confirmPassword: string): void {

    this.clearErrors();
    this.emailError = this.userExistError;
    //alert("2"+this.emailError);
    if (!this.firstName) {
      this.firstNameError = 'First Name is required';
    }

    if (!this.lastName) {
      this.lastNameError = 'Last Name is required';
    }

    if (!this.email) {
      this.emailError = 'Email is required';
    } else if (!this.validateEmail(this.email)) {
      this.emailError = 'Invalid email format';
    }

    if (!this.password) {
      this.passwordError = 'Password is required';
    } else if (this.password.length < 6) {
      this.passwordError = 'Password must be at least 6 characters long';
    }

    if (!this.confirmPassword) {
      this.confirmPasswordError = 'Confirm Password is required';
    } else if (this.password !== this.confirmPassword) {
      this.confirmPasswordError = 'Passwords do not match';
    }

    if (this.isValid()) {
      this.authService.register(this.firstName, this.lastName, this.email, this.password).subscribe(
        (response) => {
                    if (response === 'Username already exists') {
                        this.emailError  = 'Username already exists';
                    }
                    else
                    {
                          this.dialogRef.close();
                          //alert("Registration successful!");
                          //this.router.navigate(['/userprofile']);
                    }

        },
        (error) => {
            console.error(error);
        }
      );
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  isValid(): boolean {
    return !this.firstNameError && !this.lastNameError && !this.emailError &&
      !this.passwordError && !this.confirmPasswordError;
  }

  clearErrors(): void {
    this.firstNameError = '';
    this.lastNameError = '';
    this.emailError = '';
    this.passwordError = '';
    this.confirmPasswordError = '';
  }

  async signUpWithGoogle(): Promise<void> {
    await this.googleApiService.signIn();
  }

  openLoginDialog(): void {
    this.dialogRef.close();
    this.dialog.open(LoginComponent);
  }
}
