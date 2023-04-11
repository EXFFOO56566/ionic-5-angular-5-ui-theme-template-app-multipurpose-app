/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { UtilService } from 'src/app/services/util/util.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: any;
  title: any;
  description: any;
  isCreate: boolean;
  constructor(
    private route: ActivatedRoute,
    private util: UtilService,
    private adb: AngularFirestore,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log('data=>', data);
      if (data.hasOwnProperty('id')) {
        this.id = data.id;
        this.adb.collection('lists')
          .doc(localStorage.getItem('fuid'))
          .collection('list')
          .doc(this.id)
          .valueChanges()
          .subscribe((item: any) => {
            console.log('item', item);
            this.title = item.title;
            this.description = item.description;
          })
      }
    });
  }
  update() {
    if (this.title == '') {
      this.util.showWarningAlert('Please Add Title');
      return false;
    }
    if (this.description == '') {
      this.util.showWarningAlert('Please add Description');
      return false;
    }
    this.isCreate = true;

    this.adb.collection('lists').doc(localStorage.getItem('fuid')).collection('list').doc(this.id).update({
      title: this.title,
      description: this.description,
    }).then(() => {
      console.log('added');
      this.isCreate = false;
      this.navCtrl.back();
      this.util.showToast('List Updated', 'success', 'bottom');
    }).catch((error: any) => {
      console.log('error', error);
      this.isCreate = false;
      this.util.showErrorAlert("Something went Wrong");
    })
  }
}
