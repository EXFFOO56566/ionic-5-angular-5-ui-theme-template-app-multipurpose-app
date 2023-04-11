/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
  showSkip = true;
  slideOpts = {
    zoom: false
  };
  @ViewChild('slides', { static: false }) slides: IonSlides;
  constructor(
    private menuCtrl: MenuController,
    private navCtrl: NavController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }
  ngOnInit() {
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
  startApp() {
    console.log('logn');
    this.navCtrl.navigateRoot(['home']);
  }
}
