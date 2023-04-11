
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
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  isCreate: boolean;
  title: any;
  description: any;
  constructor(
    private util: UtilService,
    private adb: AngularFirestore,
    private navCtrl: NavController,
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
    let id = this.makeid(10);
    this.adb.collection('lists').doc(localStorage.getItem('fuid')).collection('list').doc(id).set({
      id: id,
      title: this.title,
      description: this.description,
      timestamp: new Date().toISOString(),
    }).then(() => {
      console.log('added');
      this.isCreate = false;
      this.navCtrl.back();
      this.util.showToast('List Added', 'success', 'bottom');
    }).catch((error: any) => {
      console.log('error', error);
      this.isCreate = false;
      this.util.showErrorAlert("Something went Wrong");
    })
  }
  makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
