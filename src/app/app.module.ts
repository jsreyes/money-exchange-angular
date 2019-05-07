import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

// NGRX
import { Store, StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { moneyExchangeEffects} from './store/moneyExchange.effects';
import { moneyExchangeReducer } from './store/moneyExchange.reducer';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ exchange: moneyExchangeReducer}),
    // EffectsModule.forRoot(moneyExchangeEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
