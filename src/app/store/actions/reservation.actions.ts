import { Action } from '@ngrx/store';

export enum ReservationActionTypes {
    ADD_RESERVATION = '[RESERVATION] Add reservation',
    CLEAR_RESERVATION = '[RESERVATION] Clear reservation',
    POST_RESERVATION = '[RESERVATION] Post reservation',
    UPDATE_RESERVATION = '[RESERVATION] Update reservation',
}

export class AddReservation implements Action{
    readonly type = ReservationActionTypes.ADD_RESERVATION;
    constructor(public payload: any){}
}

export class ClearReservation implements Action{
    readonly type = ReservationActionTypes.CLEAR_RESERVATION;
}

export class PostReservation implements Action{
    readonly type = ReservationActionTypes.POST_RESERVATION;
    constructor(public payload: any){}
}

export class UpdateReservation implements Action{
    readonly type = ReservationActionTypes.UPDATE_RESERVATION;
    constructor(public payload: any, public id: number){}
}

export type ReservationActions = AddReservation | ClearReservation | PostReservation | UpdateReservation;
