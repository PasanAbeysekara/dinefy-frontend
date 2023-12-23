import { Component, OnInit } from '@angular/core';
import {MatDialogClose, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
// import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import {LoginService} from "../../../../services/login.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";

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
export class RegisterComponent {

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>, private loginService: LoginService, private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/profile']);
    this.loginService.setIsLogged(true);
  }

}
