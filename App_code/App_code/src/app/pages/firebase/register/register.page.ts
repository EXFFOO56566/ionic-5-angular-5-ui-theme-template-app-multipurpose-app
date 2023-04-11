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
import { FireServicesService } from 'src/app/services/firebase/fire-services.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  login: register = { email: '', password: '', full_name: '', confirmPassword: '' };
  submitted = false;
  isLogin: boolean = false;
  constructor(
    private util: UtilService,
    private fireAPI: FireServicesService,
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
      this.fireAPI.register(this.login.email, this.login.password, this.login.full_name).then((userData) => {
        console.log(userData);
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
  loginBack() {
    this.navCtrl.back();
  }
}
