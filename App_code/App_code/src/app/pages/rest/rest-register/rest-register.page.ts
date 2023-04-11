/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from 'src/app/interfaces/register';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util/util.service';
import { RestAPIsService } from 'src/app/services/rest/rest-apis.service';
@Component({
  selector: 'app-rest-register',
  templateUrl: './rest-register.page.html',
  styleUrls: ['./rest-register.page.scss'],
})
export class RestRegisterPage implements OnInit {
  login: register = { email: '', password: '', full_name: '', confirmPassword: '' };
  submitted = false;
  isLogin: boolean = false;
  constructor(
    private util: UtilService,
    private api: RestAPIsService,
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    console.log('form', form);
    this.submitted = true;
    if (form.valid) {
      const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailfilter.test(this.login.email)) {
        return false;
      }
      if (this.login.password != this.login.confirmPassword) {
        this.util.errorToast('Password does not match');
        return false;
      }
      console.log('login');
      this.isLogin = true;
      let param = {
        email: this.login.email,
        password: this.login.password,
        fullname: this.login.full_name
      }
      this.api.post(param, 'Users/register').then((data) => {
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
  loginBack() {
    this.navCtrl.back();
  }
}
