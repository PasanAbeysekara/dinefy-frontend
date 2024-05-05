import {Component, OnInit, ChangeDetectorRef, ViewChild, Inject, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
//import { MatStepper, MatHorizontalStepper, MatStep, MatVerticalStepper } from '@angular/material/stepper';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/models/app-state.model';
import { PostReservation } from '../../../../store/actions/reservation.actions';
import { Reservation } from '../../../../models/api/reservationModel';
import { Router } from '@angular/router';
import { ProductInfoModel } from '../../../../models/api/productInfoModel';
import { MatStepper, MatStep } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // For mat-label
import { ReactiveFormsModule } from '@angular/forms'; // For formGroup
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ItemsSummaryComponent } from '../items-summary/items-summary.component'
import {HttpClient} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-reserve-modal',
  standalone: true,
  imports: [CommonModule,
            MatIconModule,
            MatStepperModule,
            MatFormFieldModule,
            MatInputModule,
            ReactiveFormsModule,
            FormsModule,
            MatCheckboxModule,
            MatDialogModule,
            MatButtonModule,
            ItemsSummaryComponent,
            ToastModule
            ],
  providers: [MessageService],
  templateUrl: './reserve-modal.component.html',
  styleUrl: './reserve-modal.component.css'
})
export class ReserveModalComponent implements OnInit {

  //private headers = new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem('token')}`});

  constructor(
    public dialogRef: MatDialogRef<ReserveModalComponent>,
    private formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private messageService: MessageService,
    private changeDetectorRef: ChangeDetectorRef, private router: Router) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });

  }
  @ViewChild(MatStepper) stepperHorizontal!: MatStepper;
  @ViewChild(MatStepper) stepperVertical!: MatStepper;
  @ViewChild(MatStep) stepOne!: MatStep;

  isLinear = true;
  stepOneCompleted = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  guestFormGroup!: FormGroup;
  signInFormGroup!: FormGroup;
  signUpFormGroup!: FormGroup;
  smallScreen!: boolean;
  signUp!: boolean;
  signIn!: boolean;
  guest!: boolean;
  reservation: Reservation = new Reservation();
  specialRequests!: string;
  productInfo!: ProductInfoModel;
  options: string[] = [];
  httpClient = inject(HttpClient)

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  userJourneyMange(user: string) {

    if (this.secondFormGroup){
      this.secondFormGroup.reset();
    }

    if (this.stepOneCompleted){
      this.stepOneCompleted = false;
    }

    if (user === 'signUp') {
      this.signUp = true;
      this.signIn = false;
      this.guest = false;
      this.secondFormGroup = this.signUpFormGroup;
    }
    if (user === 'signIn') {
      this.signUp = false;
      this.signIn = true;
      this.guest = false;
      this.secondFormGroup = this.signInFormGroup;
    }
    if (user === 'guest') {
      this.signUp = false;
      this.signIn = false;
      this.guest = true;
      this.secondFormGroup = this.guestFormGroup;
    }
    this.stepOneCompleted = true;
    this.changeDetectorRef.detectChanges();

    if(this.smallScreen){
      this.goForward(this.stepperVertical);
    }else{
      this.goForward(this.stepperHorizontal);
    }

  }

  ngOnInit() {
    /*this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });*/

    this.signInFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signUpFormGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });

    this.guestFormGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required]
    });
    /*
    this.store.select(store => store.reservation.reservation).subscribe(data => {
      this.reservation = data;
    });

    this.store.select(store => store.product.list).subscribe(data => {
      this.productInfo = data;
    });
*/
  }

  // makeReservation(){
  //   this.router.navigate(['/product/rest-code-1/checkout']);
  //   this.reservation = {...this.reservation, specialRequest : this.specialRequests,
  //   slotLength: this.productInfo.reservationSlotLength,
  //   slotMinutes: this.productInfo.reservationSlotMinutes,
  //   option1: this.options[0] ?? '', // Use an empty string if options[0] is null
  //   option2: this.options[1] ?? ''  };
  //    // this.store.dispatch(new PostReservation(this.reservation));
  // }

  makeReservation(): void {

    this.data.reservationPayload.specialRequest = this.specialRequests;

    this.httpClient.post(`http://${environment.host}:8081/res/reservations`,this.data.reservationPayload).subscribe({
      next: (response) => {
        console.log('Reservation successful', response);
        this.dialogRef.close('Reservation made successfully');
        this.router.navigate([`/product/${this.data.restaurantDatas.code}/checkout/${this.data.reservationPayload.reserveCode}`]);
        this.showSuccess();
      },
      error: (error) => {
        console.error('Error making reservation', error);
        this.dialogRef.close('Failed to make reservation');
        this.showFailed();
      }
    });
  }

  setOptions($event: any, type: any){
    if ($event.checked){
      if (!this.options.includes(type)){
        this.options.push(type);
      }
    }else{
      const index = this.options.findIndex(i => i == type);
      if ( index != -1){
        this.options.splice(index, 1);
      }
    }
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully Reserved !' });
  }
  showFailed() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Reserve was Unsuccessful !' });
  }

}
