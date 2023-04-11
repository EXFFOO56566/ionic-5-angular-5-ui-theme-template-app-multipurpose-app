
/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { UtilService } from 'src/app/services/util/util.service';
import { NavController } from '@ionic/angular';
import { RestAPIsService } from 'src/app/services/rest/rest-apis.service';
@Component({
  selector: 'app-rest-create',
  templateUrl: './rest-create.page.html',
  styleUrls: ['./rest-create.page.scss'],
})
export class RestCreatePage implements OnInit {
  isCreate: boolean;
  title: any;
  description: any;
  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    private api: RestAPIsService
  ) {
    this.title = '';
    this.description = '';
  }

  ngOnInit() {
    this.isCreate = false;
  }
  addList() {
    if (this.title == '') {
      this.util.showWarningAlert('Please Add Title');
      return false;
    }
    if (this.description == '') {
      this.util.showWarningAlert('Please add Description');
      return false;
    }
    this.isCreate = true;
    let param = {
      user_id: localStorage.getItem('uid'),
      title: this.title,
      description: this.description
    };
    this.api.post(param, 'Basics/save').then((data) => {
      const info = JSON.parse(data.data);
      this.isCreate = false;
      console.log('nof', info);
      if (info && info.status === 200) {
        this.navCtrl.back();
      } else {
        this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
      }
    }).catch(error => {
      console.log(error);
      this.isCreate = false;
      this.util.showToast('something went wrong', 'danger', 'bottom');
    });
  }
}
