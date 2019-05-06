import { Action } from '@ngrx/store';
import { ActionTypes } from './moneyExchange.actions';

export const initialState = 0;

export function moneyExchangeReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_EXCHANGE:
      return state + 1;

    case ActionTypes.GET_EXCHANGE_SUCCESS:
      return state - 1;

    case ActionTypes.GET_EXCHANGE_FAIL:
      return 0;

    default:
      return state;
  }
}
