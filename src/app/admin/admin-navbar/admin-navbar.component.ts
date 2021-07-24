import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private api:ApiService,private route:Router) { }

  ngOnInit(): void {
  }

 adminLogout()
  {
    this.api.adminLoginStatus.next(false);
    sessionStorage.clear();
    this.route.navigateByUrl("/adminlogin");
  }

}
