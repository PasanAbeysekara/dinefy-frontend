import { ProductInfoModel } from '../../models/api/productInfoModel';
import { ResultModel } from '../../models/api/resultModel';
import { ProductState } from '../reducers/product.reducer';
import { ReservationState } from '../reducers/reservation.reducer';

export interface AppState {
    readonly product: ProductState,
    readonly searchResults: ResultModel,
    reservation: ReservationState,
};
