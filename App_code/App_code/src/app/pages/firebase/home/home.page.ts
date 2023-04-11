/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';


import { Router, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActionSheetController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util/util.service';
import * as moment from 'moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  lists: any;
  haveData: boolean;
  constructor(
    private router: Router,
    private adb: AngularFirestore,
    private actionSheetController: ActionSheetController,
    private util: UtilService
  ) {
    this.haveData = false;

  }

  addNew() {
    this.router.navigate(['create']);
  }

  ngOnInit() {
    const uid = localStorage.getItem('fuid');
    if (uid && uid != null && uid != 'null') {
      this.adb.collection('lists')
        .doc(localStorage.getItem('fuid'))
        .collection('list')
        .valueChanges()
        .subscribe((lists: any) => {
          console.log('list', lists);
          this.lists = lists;
          if (this.lists.length > 0) {
            this.haveData = true;
          }
        })
    } else {
      this.router.navigate(['/firebase-auth']);
      this.util.showToast('Unauthorized', 'danger', 'bottom');
    }
  }


  gettimeago(time) {

    return moment(time).format('llll');
  }

  deleteItem(id) {
    return this.adb.collection('lists')
      .doc(localStorage.getItem('fuid'))
      .collection('list')
      .doc(id)
      .delete()
      .then(() => {
        console.log('deleted');
      })
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
                id: item.id
              }
            };
            this.router.navigate(['details'], navData);
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
