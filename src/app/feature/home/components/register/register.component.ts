import { Component } from '@angular/core';
import {MatDialog, MatDialogClose, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {LoginService} from "../../../../services/login.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { LoginComponent } from '../login/login.component';

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
    MatInputModule
  ]
})

export class RegisterComponent
{
  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    private loginService: LoginService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/profile']);
    this.loginService.setIsLogged(true);
  }

  openLoginDialog(): void {
    this.dialogRef.close();
    this.dialog.open(LoginComponent);
  }
}
