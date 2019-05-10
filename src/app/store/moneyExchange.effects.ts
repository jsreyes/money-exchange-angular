import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { of } from 'rxjs';
import { MoneyExchangeService } from '../service/money-exchange.service';

import * as exchangeActions from './moneyExchange.actions';

@Injectable()
export class MoneyExchangeEffects {

@Effect()
public GetExchange$ = this.actions$
  .pipe(
    ofType(exchangeActions.GET_EXCHANGE),
    switchMap((action) => {
      return this.exchangeService.getExchange()
        .pipe(
          map((res: any) => {
            return  new exchangeActions.GetExchangeSuccess(action['euro'], res['rates']['USD']);
          }),
          catchError((error) => {
            return of(new exchangeActions.GetExchangeFail());
          })
        );
    })
  );

  constructor(
    private actions$: Actions,
    private exchangeService: MoneyExchangeService,
    private store: Store<AppState>,
  ) { }
}
