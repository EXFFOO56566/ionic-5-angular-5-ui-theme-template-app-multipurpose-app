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
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util/util.service';
import { FireServicesService } from 'src/app/services/firebase/fire-services.service';
import { forgot } from 'src/app/interfaces/forgot';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  login: forgot = { email: '' };
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

  reset(form: NgForm) {
    console.log('form', form);
    this.submitted = true;
    if (form.valid) {
      const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailfilter.test(this.login.email)) {
        this.util.showToast('Enter valid email', 'danger', 'bottom');
        return false;
      }

      console.log('login');
      this.isLogin = true;
      this.fireAPI.resetPassword(this.login.email).then((data) => {
        this.isLogin = false;
        this.util.showToast('Reset Password link is sent to your email', 'dark', 'bottom');
        console.log('sent', data);
        this.navCtrl.back();
      }, error => {
        console.log(error);
        this.isLogin = false;
        this.util.showToast(`${error}`, 'danger', 'bottom');
      }).catch(error => {
        console.log(error);
        this.isLogin = false;
        this.util.showToast(`${error}`, 'danger', 'bottom');
      });
    }
  }
  loginBack() {
    this.navCtrl.back();
  }
}
