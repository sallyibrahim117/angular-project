import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './Shared/spinner/spinner.component';

import { SelectMenuComponent } from './Shared/select-menu/select-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SelectComponent } from './Shared/select/select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { Error404Component } from './Shared/error404/error404.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './Modules/products/components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Error404Component,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
