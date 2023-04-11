/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-ex2',
  templateUrl: './register-ex2.page.html',
  styleUrls: ['./register-ex2.page.scss'],
})
export class RegisterEx2Page implements OnInit {
  plt;
  constructor(private navCtrl: NavController) {
    this.plt = localStorage.getItem('platform');

  }

  ngOnInit() {
  }

  goBack()  {
    this.navCtrl.back();
  }

}
