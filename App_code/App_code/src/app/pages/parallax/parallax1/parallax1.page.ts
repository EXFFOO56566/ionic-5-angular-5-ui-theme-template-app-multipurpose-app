/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { ParallaxService } from 'src/app/services/parallex/parallax.service';


@Component({
  selector: 'app-parallax1',
  templateUrl: './parallax1.page.html',
  styleUrls: ['./parallax1.page.scss'],
})
export class Parallax1Page implements OnInit {

  basicAlertCard: any;
  constructor( public alertCtrl: AlertController, private parallax: ParallaxService) {
    this.basicAlertCard = this.parallax.card;
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

}
