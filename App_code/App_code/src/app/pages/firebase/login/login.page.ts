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
import { FireServicesService } from 'src/app/services/firebase/fire-services.service';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: login = { email: '', password: '' };
  submitted = false;
  isLogin: boolean = false;
  constructor(
    private fireAPI: FireServicesService,
    private util: UtilService,
    private router: Router
  ) { }

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
      this.fireAPI.login(this.login.email, this.login.password).then((userData) => {
        console.log(userData);
        localStorage.setItem('fuid', userData.uid);
        this.isLogin = false;
        this.router.navigate(['/fireHome']);
      }).catch(err => {
        if (err) {
          console.log(err);
          this.util.showToast(`${err}`, 'danger', 'bottom');
        }
      }).then(el => this.isLogin = false);
    }
  }

  resetPass() {
    this.router.navigate(['fireReset']);
  }
  register() {
    this.router.navigate(['fireRegister']);
  }
}
