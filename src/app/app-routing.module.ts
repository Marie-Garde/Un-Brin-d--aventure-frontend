import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { FrontPageComponent } from '../components/front-page/front-page.component';
import { LoginComponent } from '../components/login/login.component';
import { CustomersComponent } from '../components/customers/customers.component';
import { EventComponent } from 'src/components/evenementiel/evenementiel.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'évènementiel', component: EventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
