import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public api:ApiService,private route:Router) { }

  ngOnInit(): void {

  }

  UserLogout()
  {
    this.api.userLoginStatus.next(false);
    sessionStorage.clear();
    this.route.navigateByUrl("/userlogin");
  }

}
