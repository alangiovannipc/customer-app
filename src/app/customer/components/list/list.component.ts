import { Component, OnInit } from '@angular/core';
import { CustomerService } from '@customer/services/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  public promedio = 14;
  public desvEstandar = 15;
  public customers: ICustomer[];

  constructor(private _customerService: CustomerService)  {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this._customerService.listCustomer().subscribe((res) => {
      this.customers = [
        {
          id: 123456,
          nombre: 'Alan ',
          apellidos: 'Polar',
          edad: 34,
          fechaNacimiento: '07/04/1985'
        },
        {
          id: 123456,
          nombre: 'Jose ',
          apellidos: 'Perez',
          edad: 34,
          fechaNacimiento: '07/04/1985'
        }
      ];
    });
  }

}
