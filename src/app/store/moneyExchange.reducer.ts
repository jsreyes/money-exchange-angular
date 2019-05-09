import * as fromMoneyExchange from './moneyExchange.actions';
export interface ExchangeState {
  euro: number;
  dollar: number;
}

export const initialState: ExchangeState = {
  euro: 0,
  dollar: 0,
};

export function ExchangeReducer(state = initialState, action: fromMoneyExchange.exchangeActions) {
  switch (action.type) {
    case fromMoneyExchange.GET_EXCHANGE:
      return {
        ...state,
        euro: action.euro,
      };

    case fromMoneyExchange.GET_EXCHANGE_SUCCESS:
      return {
        ...state,
        dollar: action.dollar * action.euro,
      };

    case fromMoneyExchange.GET_EXCHANGE_FAIL:
      return {
        ...state,
        dollar: undefined,
      };

    default:
      return state;
  }
}
