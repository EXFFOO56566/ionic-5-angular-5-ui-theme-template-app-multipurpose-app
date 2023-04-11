/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-grid-model',
  templateUrl: './grid-model.page.html',
  styleUrls: ['./grid-model.page.scss'],
})
export class GridModelPage implements OnInit {

  @Input() url;

  image;

  constructor(navParams: NavParams, private modalCtrl: ModalController) {
    console.log(navParams.get('url'));
    this.image = navParams.get('url');
   }

  ngOnInit() {
  }

  onClick() {
    this.modalCtrl.dismiss();
  }

}
