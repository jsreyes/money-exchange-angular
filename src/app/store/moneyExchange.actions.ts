import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_EXCHANGE = '[Money Exchange] Get exchange',
  GET_EXCHANGE_SUCCESS = '[Money Exchange] Get exchange success',
  GET_EXCHANGE_FAIL = '[Money Exchange] Get exchange fail',
}

export class GetExchange implements Action {
  readonly type = ActionTypes.GET_EXCHANGE;
}

export class GetExchangeSuccess implements Action {
  readonly type = ActionTypes.GET_EXCHANGE_SUCCESS;
}

export class GetExchangeFail implements Action {
  readonly type = ActionTypes.GET_EXCHANGE_FAIL;
}
