import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  saveCustomer(customer: ICustomer): Observable<any> {
    console.log('CustomerService save customer');
    return of({
      result: true,
      message: ''
    });
  }

  listCustomer(): Observable<any> {
    console.log('listCustomer');
    return of({
      result: true,
      message: ''
    });
  }

  getCustomer(): Observable<any> {
    console.log('getCustomer');
    return of({
      result: true,
      message: ''
    });
  }

}
