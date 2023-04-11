/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-login-ex2',
  templateUrl: './login-ex2.page.html',
  styleUrls: ['./login-ex2.page.scss'],
})
export class LoginEx2Page implements OnInit {
  
  plt;
  constructor(private navCtrl: NavController, private platform: Platform) {
    // if (this.platform.is('ios')) {
    //   this.plt = 'ios';
    // } else {
    //   this.plt = 'android';
    // }

    this.plt = localStorage.getItem('platform');

   }

  ngOnInit() {
  }

  goBack()  {
    this.navCtrl.back();
  }

}
