/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenu-home',
  templateUrl: './sidemenu-home.page.html',
  styleUrls: ['./sidemenu-home.page.scss'],
})
export class SidemenuHomePage implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  goToSideMenu1() {
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.open('menu1').then(() => {
      console.log('menu 1');
    });
  }

  goToSideMenu2() {
    this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.open('menu2').then(() => {
      console.log('menu 2');
    });
  }

  goToSideMenu3() {
    this.menuCtrl.enable(true, 'menu3');
    this.menuCtrl.open('menu3').then(() => {
      console.log('menu 3');
    });
  }

  goToSideMenu4() {
    this.menuCtrl.enable(true, 'menu4');
    this.menuCtrl.open('menu4').then(() => {
      console.log('menu 4');
    });
  }

  goToSideMenu5() {
    this.menuCtrl.enable(true, 'menu5');
    this.menuCtrl.open('menu5').then(() => {
      console.log('menu 5');
    });
  }

}
