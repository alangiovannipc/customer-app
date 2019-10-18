import { Component, OnInit } from '@angular/core';
import { CustomerService } from '@customer/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ICustomer } from '@customer/interfaces/customer.interface';
import { WrapMath } from 'app/libraries/wrap-math';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

  customer: ICustomer;
  dateDead: string;

  constructor(
    private route: ActivatedRoute,
    private _customerService: CustomerService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map( ({id}) => id)
    ).subscribe(this.displayCustomer.bind(this));

  }

  displayCustomer(id) {
    console.log('displayCustomer ', id);
    this._customerService.getCustomer(id).then((customer: ICustomer) => {
      this.customer = customer;
      this.dateDead = WrapMath.possibleDateDead(customer.edad);
    });
  }

}
