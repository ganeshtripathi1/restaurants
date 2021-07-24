import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private route:Router,private api:ApiService) { }

  ngOnInit(): void {
  }

  validateAdminLogin(email: any, password: any) {


    if (email.value == "admin" && password.value == "1234") {

      sessionStorage.setItem("userLoginStatus","false");
      sessionStorage.setItem("adminLoginStatus","true");
      this.api.adminLoginStatus.next(true);
      this.route.navigateByUrl("/admin/dashboard");
    }

  }
}
