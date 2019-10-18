import { Component, OnInit } from '@angular/core';
import { CustomerService } from '@customer/services/customer.service';
import { ICustomer } from '@customer/interfaces/customer.interface';
import { WrapMath } from 'app/libraries/wrap-math';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  public average = 0;
  public desvEstandar = 0;
  public customers: ICustomer[];

  constructor(
    private _customerService: CustomerService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this._customerService.listCustomer().subscribe((res) => {
      this.customers = this.parseData(res);
      this.average = this.calculateAverageAge(this.customers);
      this.desvEstandar = this.calculateStd(this.customers);
    });
  }

  parseData(firebaseData) {
    return firebaseData.map((data) => {
      return {
        id: data.payload.doc.id,
        nombre: data.payload.doc.data().nombre,
        apellidos: data.payload.doc.data().apellidos ,
        edad: parseInt(data.payload.doc.data().edad, 10) ,
        fechaNacimiento: data.payload.doc.data().fechaNacimiento
      };
    });

  }

  calculateAverageAge(customers): any {
    const ages = customers.map((customer) => customer.edad);
    return WrapMath.average(ages).toFixed(3);
  }

  calculateStd(customers): any {
    const ages = customers.map((customer) => customer.edad);
    return WrapMath.std(ages).toFixed(3);
  }

}
