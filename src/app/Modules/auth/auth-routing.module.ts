import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [{ path: '', component: AuthComponent ,
children:[
  {path:"",redirectTo:"signup",pathMatch:"full"},
    {path:"signup",component:SignupComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
