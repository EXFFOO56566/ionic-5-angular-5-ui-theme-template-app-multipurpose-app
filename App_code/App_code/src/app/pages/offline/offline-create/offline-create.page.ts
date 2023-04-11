
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
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-offline-create',
  templateUrl: './offline-create.page.html',
  styleUrls: ['./offline-create.page.scss'],
})
export class OfflineCreatePage implements OnInit {
  isCreate: boolean;
  title: any;
  description: any;
  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    private sqlite: SQLite,
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
    if (this.description === '') {
      this.util.showWarningAlert('Please add Description');
      return false;
    }
    this.isCreate = true;
    this.sqlite.create({
      name: 'offline5.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO offlineData VALUES(NULL,?,?)', [this.title, this.description])
        .then(res => {
          console.log(res);
          this.navCtrl.back();
        })
        .catch(e => {
          console.log(e);
          this.util.showToast('Error', 'danger', 'bottom');
        });
    }).catch(e => {
      console.log(e);
      this.util.showToast('Error', 'danger', 'bottom');
    });
  }
}
