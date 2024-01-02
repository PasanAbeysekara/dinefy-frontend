import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CreateReservationService } from 'src/app/services/create-reservation.service';
import { ReservationActionTypes, AddReservation, PostReservation, UpdateReservation } from '../actions/reservation.actions';
import { map, mergeMap } from 'rxjs/operators';
import { UpdateReservationService } from 'src/app/services/update-reservation.service';

@Injectable({providedIn: 'root'})
export class ReservationEffects{
    @Effect() PostReservation$ = this.action$
        .pipe(
            ofType<PostReservation>(ReservationActionTypes.POST_RESERVATION),
            mergeMap(
                action => this.createReservationService.createReservation(action.payload)
                    .pipe(
                        map(data => new AddReservation(data))
                    )
            )
        );

    @Effect() UpdateReservation$ = this.action$
        .pipe(
            ofType<UpdateReservation>(ReservationActionTypes.UPDATE_RESERVATION),
            mergeMap(
                action => this.updateReservationService.updateReservation(action.payload, action.id)
                    .pipe(
                        map(data => new AddReservation(data))
                    )
            )
        );

    constructor(private action$: Actions,
                private createReservationService: CreateReservationService,
                private updateReservationService: UpdateReservationService){}
}
