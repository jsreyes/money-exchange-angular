import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoneyExchangeService {

  constructor(private http: HttpClient) { }

  public getExchange(): Observable<any> {
    const url = environment.api.url;
    return new Observable((observer) => {
      this.http.get(url)
        .pipe(
          catchError((err: Response) => {
            observer.error(err);
            return of(observer.error((err || 'Can\'t join the server.')));
          })
        )
        .subscribe((data) => {
          observer.next(data);
          observer.complete();
        });
    });
  }
}


