/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-admob',
  templateUrl: './admob.page.html',
  styleUrls: ['./admob.page.scss'],
})
export class AdmobPage implements OnInit {
  bannerId: any;
  inter: any;
  videoId: any;
  constructor(
    private admob: AdMobPro,
    private plt: Platform
  ) {
    if (this.plt.is('ios')) {
      this.bannerId = environment.iosAdmob.banner;
      this.inter = environment.iosAdmob.inter;
      this.videoId = environment.iosAdmob.reward;
    } else if (this.plt.is('android')) {
      this.bannerId = environment.androidAdmob.banner;
      this.inter = environment.androidAdmob.inter;
      this.videoId = environment.androidAdmob.reward;
    }

    /// adding subscriber for track add events
    this.admob.onAdDismiss().subscribe((data) => {
      console.log('on dismiss', data);
    }, error => {
      console.log(error);
    });
  }

  showBanner() {
    this.admob.createBanner({
      adId: this.bannerId,
      isTesting: false
    }).then(() => {
      this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
    }).catch((err) => {
      console.log(err);
    });
  }
  showInter() {

    this.admob.prepareInterstitial({
      adId: this.inter,
      isTesting: false
    }).then(() => {
      this.admob.showInterstitial();
    })
      .catch((err) => {
        console.log(err);
      });
  }

  showVideo() {
    this.admob.prepareRewardVideoAd({
      adId: this.videoId,
      isTesting: false,
    }).then(() => {
      this.admob.showRewardVideoAd();
    }).catch(error => {
      console.log(error);
    });
  }
  ngOnInit() {

  }

}
