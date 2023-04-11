/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-offline-home',
  templateUrl: './offline-home.page.html',
  styleUrls: ['./offline-home.page.scss'],
})
export class OfflineHomePage implements OnInit {
  lists: any;
  haveData: boolean;
  constructor(
    private router: Router,
    private sqlite: SQLite,
    private actionSheetController: ActionSheetController,
    private util: UtilService,
    private alertCtrl: AlertController
  ) {
    this.haveData = false;

  }
  ionViewWillEnter() {
    this.getInfo();
  }
  getInfo() {
    this.sqlite.create({
      name: 'offline5.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS offlineData(id INTEGER PRIMARY KEY, title TEXT, description TEXT)', [])
        .then(res => console.log('Executed SQL'))
        .catch(e => this.util.showToast(e, 'danger', 'bottom'));
      db.executeSql('SELECT * FROM offlineData ORDER BY id DESC', [])
        .then(res => {
          console.log('offline data', res);
          this.lists = [];
          for (let i = 0; i < res.rows.length; i++) {
            this.lists.push(
              {
                id: res.rows.item(i).id,
                title: res.rows.item(i).title,
                description: res.rows.item(i).description
              });
          }
          if (this.lists.length > 0) {
            this.haveData = true;
          }
        }).catch(error => {
          console.log(error);
          this.util.showToast('Error', 'danger', 'bottom');
        });
    }).catch(error => {
      console.log(error);
      this.util.showToast('Error', 'danger', 'bottom');
    });
  }
  addNew() {
    this.router.navigate(['offline-create']);
  }

  ngOnInit() {
  }


  async deleteItem(item) {
    const alert = await this.alertCtrl.create({
      header: 'are you sure?',
      message: 'to delete this item',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.sqlite.create({
              name: 'offline5.db',
              location: 'default'
            }).then((db: SQLiteObject) => {
              db.executeSql('DELETE FROM offlineData WHERE id=?', [item])
                .then(res => {
                  console.log(res);
                  this.getInfo();
                })
                .catch(e => console.log(e));
            }).catch(e => console.log(e));
          }
        }
      ]
    });

    await alert.present();
  }
  async launchMenu(item) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Action',
      buttons: [
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            console.log('Edit clicked');
            const navData: NavigationExtras = {
              queryParams: {
                data: JSON.stringify(item)
              }
            };
            this.router.navigate(['offline-details'], navData);
          }
        }, {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
            this.deleteItem(item.id);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

}
