
/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from "@angular/router";
import { ActionSheetController, AlertController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util/util.service'
import { RestAPIsService } from 'src/app/services/rest/rest-apis.service';
@Component({
  selector: 'app-rest-image-list',
  templateUrl: './rest-image-list.page.html',
  styleUrls: ['./rest-image-list.page.scss'],
})
export class RestImageListPage implements OnInit {
  lists: any;
  haveData: boolean;
  constructor(
    private router: Router,
    private actionSheetController: ActionSheetController,
    private util: UtilService,
    private api: RestAPIsService,
    private alertCtrl: AlertController
  ) {
    this.haveData = false;
  }

  ionViewWillEnter() {
    const uid = localStorage.getItem('uid');
    if (uid && uid != null && uid != 'null') {
      this.getItems();
    } else {
      this.router.navigate(['/rest-login']);
      this.util.showToast('Unauthorized', 'danger', 'bottom');
    }
  }

  getItems() {
    let param = {
      user_id: localStorage.getItem('uid')
    }
    this.api.post(param, 'ImagesCRUD/getById').then((data) => {
      const info = JSON.parse(data.data);
      console.log('data', info);
      if (info && info.status === 200) {
        this.lists = [];
        this.lists = info.data;
        if (this.lists.length > 0) {
          this.haveData = true;
        }
      }
    }).catch(error => {
      console.log('errr', error);
      this.util.showToast('something went wrong', 'danger', 'bottom');
    });
  }

  ngOnInit() {

  }
  addNew() {
    this.router.navigate(['rest-image-create']);
  }
  getImage(img) {
    return this.api.imagePath + img;
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
            this.util.show();
            const param = {
              id: item
            }
            this.api.post(param, 'ImagesCRUD/deleteList').then((data) => {
              this.util.hide();
              const info = JSON.parse(data.data);
              console.log(info);
              this.getItems();
            }).catch(error => {
              this.util.hide();
              console.log(error);
              this.util.showToast('Something went wrong', 'danger', 'bottom');
            });
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
            this.router.navigate(['rest-image-details'], navData);
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

