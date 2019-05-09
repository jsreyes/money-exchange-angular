import { Action } from '@ngrx/store';

export const GET_EXCHANGE = '[Money Exchange] Get exchange';
export const GET_EXCHANGE_SUCCESS = '[Money Exchange] Get exchange success';
export const GET_EXCHANGE_FAIL = '[Money Exchange] Get exchange fail';

export class GetExchange implements Action {
  public readonly type = GET_EXCHANGE;

  constructor(public euro: number) { }
}

export class GetExchangeSuccess implements Action {
  public readonly type = GET_EXCHANGE_SUCCESS;

  constructor(public dollar: number) {}
}

export class GetExchangeFail implements Action {
  public readonly type = GET_EXCHANGE_FAIL;
}

export type exchangeActions =
  GetExchange |
  GetExchangeSuccess |
  GetExchangeFail;
