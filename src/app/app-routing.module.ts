import { AddFoodComponent } from './admin/add-food/add-food.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MixFoodComponent } from './user/mix-food/mix-food.component';
import { LocalFoodComponent } from './user/local-food/local-food.component';
import { ChineseFoodComponent } from './user/chinese-food/chinese-food.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './user/navbar/navbar.component';

const routes: Routes = [
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'chinese',
    component:ChineseFoodComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'local',
    component:LocalFoodComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'mixfood',
    component:MixFoodComponent,
    canActivate:[AuthGuard]
   

  },
  {
    path:'userlogin',
    component:UserLoginComponent
  },
  {
    path:'adminlogin',
    component:AdminLoginComponent
  },
  {
    path:"",
    component:MixFoodComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin/dashboard",
    component:DashboardComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin/addfood',
    component:AddFoodComponent,
    canActivate:[AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
