import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handlelogin(): void{
    // connect with service 
    // send the login form data to the service over post method
    // upon successful auth expect the token as res
    // if auth successful save the token in LocalStorage/SessionStorage/Cookies
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

    localStorage.setItem('authToken', token);

    /// Hereafter you can work on interceptor
    // ng g interceptor shared/interceptors/auth
    // Refer the file: https://github.com/arunprabu/angular-course-capita-march2021/blob/main/contact-manager-plus-ng-march2021/src/app/shared/interceptors/auth.interceptor.ts
    // then Refer: https://github.com/arunprabu/angular-course-capita-march2021/blob/main/contact-manager-plus-ng-march2021/src/app/app.module.ts
    // And Look at providers section in it
  }
}
