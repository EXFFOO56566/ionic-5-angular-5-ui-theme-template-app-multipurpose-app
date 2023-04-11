/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { login } from 'src/app/interfaces/login';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UtilService } from 'src/app/services/util/util.service';
import { RestAPIsService } from 'src/app/services/rest/rest-apis.service';
@Component({
  selector: 'app-rest-login',
  templateUrl: './rest-login.page.html',
  styleUrls: ['./rest-login.page.scss'],
})
export class RestLoginPage implements OnInit {
  login: login = { email: '', password: '' };
  submitted = false;
  isLogin: boolean = false;
  constructor(
    private util: UtilService,
    private router: Router,
    private api: RestAPIsService
  ) {

  }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log('form', form);
    this.submitted = true;
    if (form.valid) {
      const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailfilter.test(this.login.email)) {
        this.util.showToast('Please enter valid email', 'danger', 'bottom');
        return false;
      }
      console.log('login');
      this.isLogin = true;
      let param = {
        email: this.login.email,
        password: this.login.password
      }
      this.api.post(param,'Users/login').then((data) => {
        this.isLogin = false;
        const info = JSON.parse(data.data);
        console.log('inof', info);
        if (info && info.status === 200) {
          localStorage.setItem('uid', info.data.id);
          this.router.navigate(['/rest-home']);
        } else {
          this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
        }
      }).catch(error => {
        this.isLogin = false;
        console.log(error);
        this.util.showToast(`${error}`, 'danger', 'bottom');
      });

    }
  }

  register() {
    this.router.navigate(['rest-register']);
  }
}
