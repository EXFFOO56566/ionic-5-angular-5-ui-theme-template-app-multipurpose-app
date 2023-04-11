/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util/util.service';
import { NavController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-offline-details',
  templateUrl: './offline-details.page.html',
  styleUrls: ['./offline-details.page.scss'],
})
export class OfflineDetailsPage implements OnInit {
  id: any;
  title: any;
  description: any;
  isCreate: boolean;
  constructor(
    private route: ActivatedRoute,
    private util: UtilService,
    private navCtrl: NavController,
    private sqlite: SQLite
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log('data=>', data);
      const info = JSON.parse(data.data);
      console.log('infp', info);
      this.id = info.id;
      this.title = info.title;
      this.description = info.description;
    });
  }
  update() {
    if (this.title === '') {
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
      db.executeSql(
        'UPDATE offlineData SET title=?,description=? WHERE id=?',
        [this.title, this.description, this.id])
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
