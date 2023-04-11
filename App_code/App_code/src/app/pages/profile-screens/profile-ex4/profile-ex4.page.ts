/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { GridServiceService } from 'src/app/services/grid/grid-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-ex4',
  templateUrl: './profile-ex4.page.html',
  styleUrls: ['./profile-ex4.page.scss'],
})
export class ProfileEx4Page implements OnInit {

  dummyData = [];
  plt;

  constructor(private grid: GridServiceService, private navCtrl: NavController) {
    this.dummyData = this.grid.data;
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
