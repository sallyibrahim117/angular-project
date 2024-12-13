import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [{ path: '', component: AuthComponent ,
children:[
  {path:"",redirectTo:"signup",pathMatch:"full"},
    {path:"signup",component:SignupComponent},
    {path:"login",component:LoginComponent},
    {path:"subscribe",component:SubscribeComponent},

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
