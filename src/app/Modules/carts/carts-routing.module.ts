import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartsComponent } from './carts.component';

const routes: Routes = [{ path: '', component: CartsComponent ,
children:[
{path:"",redirectTo:"cart",pathMatch:"full"},
{path:"cart",component:CartComponent}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartsRoutingModule { }
