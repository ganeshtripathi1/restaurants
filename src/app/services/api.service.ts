import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url: any = environment.base_url;
  userLoginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  adminLoginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }



  getData(url: any) {
    return this.http.get(this.base_url + url);
  }

  postData(url: any, body: any) {
    return this.http.post(this.base_url + url, body);
  }

  getUserLoginStatus() {
    let status: boolean;
    this.userLoginStatus.subscribe(res => {
      status = res;
    });
    return status;
  }

  getAdminLoginStatus() {
    let status: boolean;
    this.adminLoginStatus.subscribe(res => {
      status = res;
    });
    return status;
  }
}
