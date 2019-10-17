import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromCustomerComponents from '@customer/components/';

const routes: Routes = [
  {
    path: '',
    component: fromCustomerComponents.RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
