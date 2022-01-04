import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductPipe } from './product.pipe';
import { AuthorizationInterceptor } from './authorization.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    AddproductComponent,
    SpinnerComponent,
    RegisterComponent,
    LoginComponent,
    ProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthorizationInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
