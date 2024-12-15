import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { OtpVerifyComponent } from './component/otp-verify/otp-verify.component';
import { ResetEmailComponent } from './component/reset-email/reset-email.component';


@NgModule({
  declarations: [AuthComponent, SignupComponent, LoginComponent, SubscribeComponent, OtpVerifyComponent, ResetEmailComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
FormsModule
  ]
})
export class AuthModule { }
