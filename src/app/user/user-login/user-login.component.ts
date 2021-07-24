import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  constructor(private route:Router,private api:ApiService) { }

  ngOnInit(): void {
  }
  
  validateUserLogin(email: any, password: any) {
    if (email.value == "ganesh" && password.value == "1234") {
      sessionStorage.setItem("userLoginStatus","true");
      sessionStorage.setItem("adminLoginStatus","false");
      this.api.userLoginStatus.next(true);
      this.route.navigateByUrl("/mixfood");
    }
  }

}
