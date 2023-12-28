import { Action } from '@ngrx/store';
import { ProductInfoModel } from '../../models/api/productInfoModel';
import { ResultModel } from 'src/app/models/api/resultModel';

export enum SearchResultActionTypes {
    ADD_SEARCH_RESULTS = '[SEARCH_RESULTS] Add Search Results'
}

export class AddResultsAction implements Action {
    readonly type = SearchResultActionTypes.ADD_SEARCH_RESULTS;
    constructor(public payload: any) { }
}

export type SearchResultsAction = AddResultsAction;