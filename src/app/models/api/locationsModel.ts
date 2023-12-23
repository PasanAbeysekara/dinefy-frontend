export interface LocationsWrapper{
    countryId: number;
    states: LocationStateModel[];
    cities: LocationCityModel[];
}

export interface LocationStateModel{
    stateId: number;
    name: string;
}

export interface LocationCityModel{
    locationId: number;
    name: string;
    stateId: number;
}
