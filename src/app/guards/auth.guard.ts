import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private api:ApiService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let userLoginStatus: boolean;
    let value:string;
    console.log("auth guard");

    value = sessionStorage.getItem("userLoginStatus");
    if(value=="true")
    {
      userLoginStatus = true;
      this.api.userLoginStatus.next(true);
      this.api.adminLoginStatus.next(false);
    }

    if (userLoginStatus) {
      return true;
    }
    else {
      this.route.navigateByUrl("/userlogin");
      return false;
    }
  }
  
}
