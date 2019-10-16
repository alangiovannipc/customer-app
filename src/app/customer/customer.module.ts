import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import * as fromCustomerComponents from './components/';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [ ...fromCustomerComponents.customerComponents]
})
export class CustomerModule { }
