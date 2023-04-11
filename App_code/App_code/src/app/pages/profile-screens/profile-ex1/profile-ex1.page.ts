/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { GridServiceService } from '../../../services/grid/grid-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-ex1',
  templateUrl: './profile-ex1.page.html',
  styleUrls: ['./profile-ex1.page.scss'],
})
export class ProfileEx1Page implements OnInit {

  data;
  plt;
  constructor(private grid: GridServiceService, private navCtrl: NavController) {
    this.plt = localStorage.getItem('platform');
    this.data = this.grid.data2;
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
