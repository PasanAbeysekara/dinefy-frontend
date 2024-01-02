import { Facilities } from '../api/facilitiesModel';

export interface ProductFacilities {
    propFacilityId: Array<any>;
    name: string;
    description: string;
    order: number;
    sysFacility: Facilities;
}
