import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './Shared/error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./Modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },

  {
    path: 'carts',
    loadChildren: () =>
      import('./Modules/carts/carts.module').then((m) => m.CartsModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./Modules/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {path:"home" , component:HomeComponent},
  {path:"**" , component:Error404Component}
  // { path: 'sharedComponent', loadChildren: () => import('./Modules/shared-component/shared-component.module').then(m => m.SharedComponentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
