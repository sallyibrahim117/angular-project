import { SpinnerComponent } from 'src/app/Shared/spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryComponent } from './components/category/category.component';


@NgModule({
  declarations: [CategoriesComponent, CategoryComponent ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
