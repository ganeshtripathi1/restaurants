import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './user/header/header.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { ChineseFoodComponent } from './user/chinese-food/chinese-food.component';
import { LocalFoodComponent } from './user/local-food/local-food.component';
import { MixFoodComponent } from './user/mix-food/mix-food.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AddFoodComponent } from './admin/add-food/add-food.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ManageChiniseFoodComponent } from './admin/manage-chinise-food/manage-chinise-food.component';
import { ManageLocalFoodComponent } from './admin/manage-local-food/manage-local-food.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ChineseFoodComponent,
    LocalFoodComponent,
    MixFoodComponent,
    AdminHeaderComponent,
    AdminLoginComponent,
    UserLoginComponent,
    DashboardComponent,
    AdminNavbarComponent,
    AddFoodComponent,
    ManageChiniseFoodComponent,
    ManageLocalFoodComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
