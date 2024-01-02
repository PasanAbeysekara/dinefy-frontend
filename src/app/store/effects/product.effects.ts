import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadProductAction, ProductActionTypes, LoadProductSuccessAction, LoadProductFailureAction } from '../actions/product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { GetProductService } from 'src/app/services/get-product.service';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductEffects{
    @Effect() loadProduct$ = this.action$
        .pipe(
            ofType<LoadProductAction>(ProductActionTypes.LOAD_PRODUCT),
            mergeMap(
                () => this.productService.getProductInfo(1)
                    .pipe(
                        map(data => new LoadProductSuccessAction(data)),
                        catchError(error => of(new LoadProductFailureAction(error)))
                    )
            )
        )

    constructor(private action$: Actions, private productService: GetProductService){}
}