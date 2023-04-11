
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
import { AngularFirestore } from '@angular/fire/firestore';
import { UtilService } from 'src/app/services/util/util.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-fire-image-detail',
  templateUrl: './fire-image-detail.page.html',
  styleUrls: ['./fire-image-detail.page.scss'],
})
export class FireImageDetailPage implements OnInit {

  id: any;
  title: any;
  description: any;
  isCreate: boolean;
  image: any;
  constructor(
    private route: ActivatedRoute,
    private util: UtilService,
    private adb: AngularFirestore,
    private navCtrl: NavController, ) { }

  ngOnInit() {
    this.title = '';
    this.description = '';
    this.isCreate = false;
    this.route.queryParams.subscribe(data => {

      if (data.hasOwnProperty('id')) {
        this.id = data.id;
        this.adb.collection('fireimage')
          .doc(localStorage.getItem('fuid'))
          .collection('list')
          .doc(this.id)
          .valueChanges()
          .subscribe((item: any) => {
            console.log('item', item);
            this.title = item.title;
            this.description = item.description;
            this.image = item.image;
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

    this.adb.collection('fireimage').doc(localStorage.getItem('fuid')).collection('list').doc(this.id).update({
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
