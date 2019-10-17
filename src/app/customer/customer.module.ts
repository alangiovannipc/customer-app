import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import * as fromCustomerComponents from './components/';
import { MaterialModule } from 'app/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [ ...fromCustomerComponents.customerComponents],
  exports: [ ...fromCustomerComponents.customerComponents]
})
export class CustomerModule {
}
