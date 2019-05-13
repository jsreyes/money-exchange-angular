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
  public conversionToDollar: number = undefined;

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

  public subscribeToExchange() {
    this.subscriptionToExchange = this.store.select('exchange').subscribe((exchangeState: ExchangeState) => {
      if (exchangeState.dollar) {
        this.conversionToDollar = exchangeState.dollar;
      }
    });
  }

  public initForm() {
    this.exchangeForm = this.fb.group({
      euro: ['', Validators.compose([Validators.required])],
      dollar: [{ value: this.conversionToDollar ? this.conversionToDollar : 0, disabled: true}, Validators.compose([Validators.required])],
    });
  }

  public exchangeOnSubmit(exchangeForm) {
    const euroValue = exchangeForm.euro.replace(',', '');
    const action = new exchangeActions.GetExchange(parseFloat(euroValue));
    this.store.dispatch(action);
    setInterval(() => {
      this.store.dispatch(action);
    },  600000);
  }

  public formatNumber(number) {
    let value = number.toString().replace(/([^\d])+/g, '');
    value = Math.abs(value)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return value;
  }

  public formatEuroValue(euro) {
    this.exchangeForm.controls['euro'].setValue(this.formatNumber(euro));
  }
}
