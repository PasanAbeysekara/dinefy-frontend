// import { Reservation } from 'src/app/models/api/reservationModel';
import { ReservationActions, ReservationActionTypes } from '../actions/reservation.actions';
import {Reservation} from "../../models/api/reservationModel";

export interface ReservationState {
    reservation: Reservation;
    loading: boolean;
    error: boolean;
}

const initialState: ReservationState = {
    reservation: {
        reservationId: 0,
        propId: 0,
        availableUnitId: 0,
        availableUnitType: '',
        date: new Date('2021-01-30'),
        time: '23:00:00',
        timeSlots: 0,
        status: '',
        hostUser: 0,
        headCount: 5,
        specialRequest: '',
        slotLength: 2,
        slotMinutes: 60,
        option1: '',
        option2: '',
        orders: []
    },
    loading: false,
    error: false,
};

export function ReservationReducer(state: ReservationState = initialState, action: ReservationActions) {
    switch (action.type) {
        case ReservationActionTypes.ADD_RESERVATION:
            return {...state, reservation: action.payload, loading: false};
        case ReservationActionTypes.CLEAR_RESERVATION:
            return {...state, reservation: initialState};
        case ReservationActionTypes.POST_RESERVATION:
            return {...state, loading: true};
        case ReservationActionTypes.UPDATE_RESERVATION:
            return {...state, loading: true};
        default:
            return state;
    }
}
