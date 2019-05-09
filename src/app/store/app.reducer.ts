import { ActionReducerMap } from '@ngrx/store';
import * as exchangeReducer from './moneyExchange.reducer';

export interface AppState {
  exchange: exchangeReducer.ExchangeState;
}

export const appReducers: ActionReducerMap<AppState> = {
  exchange: exchangeReducer.ExchangeReducer
};


