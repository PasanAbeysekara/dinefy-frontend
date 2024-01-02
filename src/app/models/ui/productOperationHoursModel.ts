import { Time } from '@angular/common';

export interface ProductOperationHour{
    operationHourKey: OperationHourKey;
    timeStart: Time;
    timeEnd: Time;
    name: string;
}

export interface OperationHourKey{
    propId: number;
    opId: number;
}
