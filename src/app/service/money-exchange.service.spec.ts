import { TestBed, inject } from '@angular/core/testing';
import { MoneyExchangeService } from './money-exchange.service';
import { HttpClientModule } from '@angular/common/http';

fdescribe('MoneyExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MoneyExchangeService]
    });
  });

  it('should be created', inject([MoneyExchangeService], (service: MoneyExchangeService) => {
    expect(service).toBeTruthy();
  }));
});
