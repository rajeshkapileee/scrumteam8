import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : 'products',component :ProductsComponent ,
   data: { role: ['admin', 'user'] }, canActivate: [AuthGuard]},
  {path : 'addproduct',component : AddproductComponent ,
  data: { role: ['admin'] },
  canActivate: [AuthGuard]},
  {path :'register',component :RegisterComponent},
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
