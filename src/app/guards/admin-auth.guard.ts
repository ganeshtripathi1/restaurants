import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private api:ApiService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
  
  let adminLoginStatus:boolean;
  let value:string;

  value = sessionStorage.getItem("adminLoginStatus");
  if(value =="true")
  {
    adminLoginStatus = true;
    this.api.adminLoginStatus.next(true);
    this.api.userLoginStatus.next(false);
    
  }

  if(adminLoginStatus){

    return true;
  }
  else{
    this.route.navigateByUrl("/adminlogin");
    return false;
  }
  
  }
  
}
