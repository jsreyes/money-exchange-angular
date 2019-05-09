import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';

import * as exchangeActions from '../../store/moneyExchange.actions';
import { ExchangeState } from '../../store/moneyExchange.reducer';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  public exchangeForm: FormGroup;
  public euro: number = undefined;
  public conversionToDollar = 0;

  private subscriptionToExchange: Subscription;

  constructor(private store: Store<AppState>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.subscribeToExchange();
    this.initForm();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.subscriptionToExchange.unsubscribe();
  }

  public initForm() {
    this.exchangeForm = this.fb.group({
      euro: ['', Validators.compose([Validators.required])],
      dollar: [{value: this.conversionToDollar, disabled: true}, Validators.compose([Validators.required])],
    });
  }

  public exchangeOnSubmit(exchangeForm) {
    console.log(exchangeForm, ' esto es lo que envia');
    const action = new exchangeActions.GetExchange(exchangeForm.euro);
    this.store.dispatch(action);
  }

  public subscribeToExchange() {
    this.subscriptionToExchange = this.store.select('exchange').subscribe((exchangeState: ExchangeState) => {
      this.conversionToDollar = exchangeState.dollar;
    });
  }

}
