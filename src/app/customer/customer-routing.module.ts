import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromCustomerComponents from './components/';

const routes: Routes = [
  {
    path: 'register',
    component: fromCustomerComponents.RegisterComponent
  },
  {
    path: 'list',
    component: fromCustomerComponents.ListComponent
  },
  {
    path: 'projection/cliente/:id',
    component: fromCustomerComponents.ProjectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
