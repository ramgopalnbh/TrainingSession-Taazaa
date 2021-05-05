import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListwithasyncComponent } from './listwithasync/listwithasync.component';
import { ListwithobservableComponent } from './listwithobservable/listwithobservable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import {​​​​​​​​MatSidenavModule}​​​​​​​​ from'@angular/material/sidenav';
import {​​​​​​​​MatIconModule}​​​​​​​​ from'@angular/material/icon';
import {​​​​​​​​MatToolbarModule}​​​​​​​​ from'@angular/material/toolbar';
import {​​​​​​​​MatButtonModule}​​​​​​​​ from'@angular/material/button';
import {​​​​​​​​MatListModule}​​​​​​​​ from'@angular/material/list';
import {​​​​​​​​MatSelectModule}​​​​​​​​ from'@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListwithasyncComponent,
    ListwithobservableComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
