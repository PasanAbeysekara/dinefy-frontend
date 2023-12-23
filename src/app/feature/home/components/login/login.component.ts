import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogClose} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

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
    MatInputModule
  ]
})

export class LoginComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,private router: Router
   ) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/profile']);
  }

}
