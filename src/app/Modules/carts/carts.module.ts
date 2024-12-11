import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { CartsComponent } from './carts.component';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [CartsComponent, CartComponent],
  imports: [
    CommonModule,
    CartsRoutingModule
  ]
})
export class CartsModule { }
