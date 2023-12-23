import { Time } from '@angular/common';
import { ProductFacilities } from '../ui/productFacilitiesModel';
import { ProductMenu } from '../ui/productMenusModel';
import { ProductChoice } from '../ui/productChoicesModel';
import { ProductOperationHour } from '../ui/productOperationHoursModel';
import { ProductSpeciality } from '../ui/productSpecialitiesModel';
import { ProductPaymentOption } from '../ui/productPaymentOptionModel';
import { Tags } from './tagsModel';

export interface ProductInfoModel {
    propId: string;
    code: string;
    name: string;
    description: string;
    geoLocation: Point;
    latitude: number;
    longitude: number;
    currentContId: number;
    startTime: string;
    endTime: string;
    avgRating: number;
    totalRating: number;
    amount: number;
    amountCurrency: string;
    amountCondition: string;
    reservationSlotMinutes: number;
    reservationSlotLength: number;
    bookingNote: string;
    operationHours: Array<ProductOperationHour>;
    availabilityUnits: Array<AvailabilityUnits>;
    basedLocation: BasedLocation;
    currentContract: CurrentContract;
    facilities: Array<ProductFacilities>;
    tags: Array<PropTags>;
    contactDetails: ContactDetails;
    propertySpecialities: Array<ProductSpeciality>;
    paymentOptions: Array<ProductPaymentOption>;
    livePromotions: Array<Promotion>;
    organizations: Organization;
    timeSlots: Array<string>;
    propMenus: PropMenus;
    propertyMediaWrapper: PropertyMediaWrapper;
}

export interface OperationHours {
    operationHourKey: Array<any>;
    timeStart: Time;
    timeEnd: Time;
    name: string;
}

export interface AvailabilityUnits {
    propAvailabilityUnitId: {
        propId: number,
        unit_id: number
    };
    name: string;
    description: string;
    capacity: number;
    sysAvailabilityUnit: SysAvailabilityUnit;
    links: Array<any>;
}

export interface SysAvailabilityUnit {
    unitId: number;
    code: string;
    name: string;
    minCapacity: number;
    maxCapacity: number;
    type: string;
    links: Array<any>;
}

export interface BasedLocation {
    locationId: number;
    name: string;
    state: Array<any>;
}

export interface CurrentContract {
    contractId: number;
    version: number;
    propId: number;
    name: string;
    validFrom: string;
    validTo: string;
    versionTxt: string;
    bookableHorizon: number;
    seasons: Array<any>
    links: Array<any>
}

export interface PropFacilities {
    propFacilityId: Array<any>;
    name: string;
    description: string;
    sysFacility: Array<any>;
}

export interface Point {
    x: Number;
    y: Number;
}

export interface ContactDetails{
    contactId: number;
    type: string;
    name: string;
    email: string;
    web: string;
    phonePrimary: string;
    phoneSecondary: string;
    address1: string;
    address2: string;
    address3: string;
    zip: string;
}

export interface PropertySpeciality{
    specialityId: number;
    name: string;
    description: string;
}

export interface PaymentOptions{
    optionId: number;
    name: string;
}

export interface Promotion{
    promoId: object;
    name: string;
    description: string;
    tierId: string;
    promoTypeId: number;
    start: Date;
    end: Date;
    live: boolean;
    maxedOutLanding: boolean;
    maxedOutSearch: boolean;
}

export interface Organization{
    orgId: number;
    code: string;
    name: string;
}

export interface Menu{
    menuId: number;
    name: string;
    description: string;
    menuCategories: Array<any>;
}

export interface PropChoices{
    propChoiceId: {
        choiceId: number,
        propId: number;
    };
    name: string;
    description: string;
    sysChoice: object;
}

export interface PropertyMediaWrapper{
    bannerImages: Array<PropMediaModel>;
    coverImages: Array<PropMediaModel>;
    otherMedia: Array<PropMediaModel>;

}

export interface PropMediaModel {
    mediaUrl: string;
    title: string;
    mediaType: string;
    thumbnail: string;
}

export interface Facilities {
    facilityId?: number;
    code: string;
    name?: string;
    description?: string;
}

export interface PropTags {
    code?: string;
    name?: string;
    description?: string;
    order?: number;
    sysTags?: Tags;
}

export interface PropMenus {
    menus: Array<ProductMenu>;
    choices: Array<ProductChoice>;
}
