import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent ,children:[
    {path:"",redirectTo:"all-products",pathMatch:"full"},
    {path:"all-products",component:AllProductsComponent},
   {path:"productDetails/:id",component:ProductDetailsComponent},
   {path:"addproduct",component:AddProductComponent}
  ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
