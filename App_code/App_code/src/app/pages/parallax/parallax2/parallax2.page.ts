/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { AlertController, NavController } from '@ionic/angular';
import { ParallaxService } from 'src/app/services/parallex/parallax.service';

@Component({
  selector: 'app-parallax2',
  templateUrl: './parallax2.page.html',
  styleUrls: ['./parallax2.page.scss'],
})
export class Parallax2Page implements OnInit {

  public selectedSegment = 'about';
  basicAlertCard: any;
  plt;

  constructor(public alertCtrl: AlertController, private parallax: ParallaxService, private navCtrl: NavController) {
    this.basicAlertCard = this.parallax.card;
    this.plt = localStorage.getItem('platform');
  }

  segmentChanged(event: any) {
    console.log('Segment changed', event);
  }

  ngOnInit() {
  }

  showBasicAlert(fruits) {
    this.presentAlert(fruits.name, fruits.descriptions);
  }
  /*
   Show basic Alert Message
   param :header = header or title of alert message, msg = message to display
   Call this method to show basic Alert,
   */
  async presentAlert(headerMsg, msg) {
    const alert = await this.alertCtrl.create({
      header: headerMsg,
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (Cancle) => {
            console.log('Cancle Button');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  goBack() {
    this.navCtrl.back();
  }

}
