import { SearchResultsAction, SearchResultActionTypes } from '../actions/search-results.action';
import { ResultModel } from 'src/app/models/api/resultModel';

const initialState: Array<ResultModel> = [
    {
        url: '11133',
        imgUrl: '',
        name: '',
        location: '',
        currency: '',
        Price: '',
        TimeSlots: '',
        description: '',
        type: '',
        amountCondition: '',
        avgRating: '',
        ratingOutOf: 0,
        code:'',
    }
];

export function SearchResultsReducer(state: Array<ResultModel> = initialState, action: SearchResultsAction) {
    switch (action.type) {
        case SearchResultActionTypes.ADD_SEARCH_RESULTS:
            return [action.payload];
        default:
            return state;
    }
}
