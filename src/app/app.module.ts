import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HttpComponent } from './http/http/http.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home/home.component';
import { MaterialComponent } from './material/material.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatComponentsModule } from './mat-components.module';
import { IAppState, INIT_STATE } from './redux/iapp-state';
import { rootReducer } from './redux/rootReducer';
import { ReduxComponent } from './redux/redux.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { authService } from './auth/auth.service';
import { AdminGuard } from './auth/admin.guard';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductService } from './product.service';
import { CustomFormsModule } from 'ng2-validation'
import { DataTablesModule } from 'angular-datatables';
import { ProductComponent } from './product/product.component';
import { ReportViewerComponent } from './report/report-viewer/report-viewer.component';
import {  StimulsoftViewerModule } from 'stimulsoft-viewer-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HttpComponent,
    HomeComponent,
    MaterialComponent,
    EditDialogComponent,
    ReduxComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ReportViewerComponent,
  ],
  entryComponents: [
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    NgReduxModule,
    NgbModule,
    CustomFormsModule,
    DataTablesModule,
    StimulsoftViewerModule
  ],
  providers: [
    authService,
    AuthGuard,
    AdminGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INIT_STATE);
  }
}