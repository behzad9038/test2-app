import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from '../http/http/http.component';
import { HomeComponent } from '../home/home/home.component';
import { MaterialComponent } from '../material/material.component';
import { ReduxComponent } from '../redux/redux.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'http', component: HttpComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'redux', component: ReduxComponent },
/*   { path: 'path', component: FeatureComponent },
  { path: '**', component: PageNotFoundComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}