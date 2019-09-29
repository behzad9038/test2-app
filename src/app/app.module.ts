import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HttpComponent } from './http/http/http.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home/home.component';
import { MaterialComponent } from './material/material.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatComponentsModule } from './mat-components.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HttpComponent,
    HomeComponent,
    MaterialComponent,
    EditDialogComponent
  ],
  entryComponents:[
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
