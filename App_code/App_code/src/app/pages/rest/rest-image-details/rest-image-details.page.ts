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
import { UtilService } from 'src/app/services/util/util.service';
import { NavController } from '@ionic/angular';
import { RestAPIsService } from 'src/app/services/rest/rest-apis.service';

@Component({
  selector: 'app-rest-image-details',
  templateUrl: './rest-image-details.page.html',
  styleUrls: ['./rest-image-details.page.scss'],
})
export class RestImageDetailsPage implements OnInit {
  id: any;
  title: any;
  description: any;
  isCreate: boolean;
  image: any;
  url: any;
  constructor(
    private route: ActivatedRoute,
    private util: UtilService,
    private navCtrl: NavController,
    private api: RestAPIsService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log('data=>', data);
      if (data.hasOwnProperty('data')) {
        const info = JSON.parse(data.data);
        console.log('nof', info);
        this.id = info.id;
        this.title = info.title;
        this.description = info.description;
        this.image = this.api.imagePath + info.img;
        this.url = info.img;
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
    let param = {
      id: this.id,
      user_id: localStorage.getItem('uid'),
      title: this.title,
      description: this.description,
      img: this.url
    };
    this.api.post(param, 'ImagesCRUD/editList').then((data) => {
      const info = JSON.parse(data.data);
      console.log(info);
      if (info && info.status === 200) {
        this.navCtrl.back();
      } else {
        this.util.showToast('something went wrong', 'danger', 'bottom');
      }
    }).catch(error => {
      console.log(error);
      this.util.showToast('something went wrong', 'danger', 'bottom');
    })
  }
}
