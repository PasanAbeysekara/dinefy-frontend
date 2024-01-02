import { ProductActionTypes, ProductAction } from '../actions/product.actions';
import { ProductInfoModel } from '../../models/api/productInfoModel';

export interface ProductState {
    list: ProductInfoModel,
    loading: boolean,
    error: false,
}

const initialState: ProductState = {
    list: {
        propId: '',
        code: '',
        name: '',
        description: '',
        currentContId: 0,
        startTime: '',
        endTime: '',
        avgRating: 0.0,
        totalRating: 0,
        amount: 0.00,
        amountCurrency: '',
        amountCondition: '',
        reservationSlotMinutes: 0,
        reservationSlotLength: 0,
        bookingNote: '',
        operationHours: [],
        geoLocation: {
            x: 0,
            y: 0,
        },
        latitude: 0.0,
        longitude: 0.0,
        availabilityUnits: [],
        basedLocation: {
            locationId: 0,
            name: '',
            state: []
        },
        currentContract: {
            contractId: 0,
            version: 0,
            propId: 0,
            name: '',
            validFrom: '',
            validTo: '',
            versionTxt: '',
            bookableHorizon: 0,
            seasons: [],
            links: []
        },
        facilities: [],
        tags: [],
        contactDetails: {
            contactId: 0,
            type: '',
            name: '',
            email: '',
            web: '',
            phonePrimary: '',
            phoneSecondary: '',
            address1: '',
            address2: '',
            address3: '',
            zip: '',
        },
        propertySpecialities: [],
        paymentOptions: [],
        livePromotions: [],
        organizations: {
            orgId: 0,
            code: '',
            name: ''
        },
        timeSlots: [],
        propMenus: {
            menus: [],
            choices: []
        },
        propertyMediaWrapper: {
            bannerImages: [],
            coverImages: [],
            otherMedia: []
        }
    },
    loading: false,
    error: false
}

export function ProductReducer(state: ProductState = initialState, action: ProductAction) {
    switch (action.type) {
        case ProductActionTypes.LOAD_PRODUCT:
            return {...state, loading: true};
        case ProductActionTypes.LOAD_PRODUCT_SUCCESS:
            return {...state, list: action.payload, loading: false};
        case ProductActionTypes.LOAD_PRODUCT_FAILURE:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
}
