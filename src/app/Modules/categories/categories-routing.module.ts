import { CategoryComponent } from './components/category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';

const routes: Routes = [{ path: '', component: CategoriesComponent ,
children:[
  {path:"",redirectTo:"category",pathMatch:"full"},
  {path:"category",component:CategoryComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
