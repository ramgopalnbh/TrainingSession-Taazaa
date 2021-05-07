import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
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
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import {MatTableModule} from '@angular/material/table';
import { MatproducttableComponent } from './matproducttable/matproducttable.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from'@angular/material/expansion';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListwithasyncComponent,
    ListwithobservableComponent,
    AddproductComponent,
    UpdateproductComponent,
    MatproducttableComponent,
    DeleteproductComponent
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
    ReactiveFormsModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
