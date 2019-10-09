import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from '../http/http/http.component';
import { HomeComponent } from '../home/home/home.component';
import { MaterialComponent } from '../material/material.component';
import { ReduxComponent } from '../redux/redux.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { AdminOrdersComponent } from '../admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from '../admin/admin-products/admin-products.component';
import { LoginComponent } from '../auth/login/login.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from '../auth/admin.guard';
import { ProductFormComponent } from '../admin/product-form/product-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'http', component: HttpComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'redux', component: ReduxComponent, canActivate: [AuthGuard] },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'my-order', component: MyOrdersComponent },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'login', component: LoginComponent },
  /*   { path: 'path', component: FeatureComponent },
    { path: '**', component: PageNotFoundComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
