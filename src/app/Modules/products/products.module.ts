import { SelectMenuComponent } from './../../Shared/select-menu/select-menu.component';
// import { SharedComponentModule } from './../shared-component/shared-component.module';
import { CategoriesModule } from './../categories/categories.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoriesRoutingModule } from '../categories/categories-routing.module';
import { SpinnerComponent } from 'src/app/Shared/spinner/spinner.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProductsComponent, AllProductsComponent, ProductDetailsComponent, SelectMenuComponent, ProductComponent, AddProductComponent,SpinnerComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
ReactiveFormsModule,
FormsModule
    ]
})
export class ProductsModule { }
