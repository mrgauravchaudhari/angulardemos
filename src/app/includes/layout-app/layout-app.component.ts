import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-layout-app',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.css']
})
export class LayoutAppComponent {

  lastUrlSegment = this.router.url.split('?')[0].split('/').pop() // current url last segment
  token: any;
  loginUserName: any;
  loginUserId: any;

  constructor(private router: Router) {
    this.token = localStorage.getItem('token');
    // let loginData = jwt_decode(this.token) // jwt token decode
    // console.log(loginData);

    // this.loginUserName = loginData['unique_name'] // login user name
    // this.loginUserId = this.loginUser['nameid'] // login user id


    console.log('Layout App Loaded...')
  }


  logout() {
    this.router.navigateByUrl('auth/login');
    localStorage.removeItem('token');
  }
}
