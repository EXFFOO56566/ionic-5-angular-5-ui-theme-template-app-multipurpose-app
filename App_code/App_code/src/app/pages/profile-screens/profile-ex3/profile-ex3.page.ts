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
  selector: 'app-profile-ex3',
  templateUrl: './profile-ex3.page.html',
  styleUrls: ['./profile-ex3.page.scss'],
})
export class ProfileEx3Page implements OnInit {

  posts;
  plt;
  constructor(private data: GridServiceService, private navCtrl: NavController) {
    this.posts = this.data.data;
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
