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
  selector: 'app-register-ex5',
  templateUrl: './register-ex5.page.html',
  styleUrls: ['./register-ex5.page.scss'],
})
export class RegisterEx5Page implements OnInit {

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
