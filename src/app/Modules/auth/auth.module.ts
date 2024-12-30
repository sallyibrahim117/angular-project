
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { OtpVerifyComponent } from './component/otp-verify/otp-verify.component';
// import {  NgOtpInputModule } from 'ng-otp-input';
import { ResetPassComponent } from './component/reset-pass/reset-pass.component';
import { OtpInputComponent } from './component/otp-input/otp-input.component';


@NgModule({
  declarations: [AuthComponent, SignupComponent, LoginComponent, SubscribeComponent, OtpVerifyComponent, ResetPassComponent, OtpInputComponent , ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
// NgOtpInputModule
  ]
})
export class AuthModule { }
