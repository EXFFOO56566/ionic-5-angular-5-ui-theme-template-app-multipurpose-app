/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';


import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';
import { DummyService } from './services/data/dummy.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public menu1Selected = 0;
  public selectedIndex = 0;
  public appPages = [];
  showSubMenu = '';
  plt;

  public pages = [

    {
      title: 'Languages', url: '', icon: 'language',
      subPages: [
        { title: 'C', url: '', icon: '' },
        { title: 'C++', url: '', icon: '' },
        { title: 'Java', url: '', icon: '' },
      ]
    },
    {
      title: 'Framework', url: '', icon: 'information-circle',
      subPages: [
        { title: 'Ionic', url: '', icon: '' },
        { title: 'xamarin', url: '', icon: '' },
        { title: 'React', url: '', icon: '' }]
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private dummyService: DummyService,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.appPages = this.dummyService.sidemenu;
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        setTimeout(async () => {
          await this.oneSignal.startInit(environment.onesignal.appId, environment.onesignal.googleProjectNumber);
          this.oneSignal.getIds().then((data) => {
            localStorage.setItem('onesignal', data.userId);
          });
          await this.oneSignal.endInit();
        }, 1000);
      }
      this.menuCtrl.enable(false, 'menu2');
      this.menuCtrl.enable(false, 'menu3');
      this.menuCtrl.enable(false, 'menu4');
      this.menuCtrl.enable(false, 'menu5');

      if (this.platform.is('ios')) {
        localStorage.setItem('platform', 'ios');
        this.plt = localStorage.getItem('platform');
        console.log("",this.plt);
      } else {
        localStorage.setItem('platform', 'android');
        this.plt = localStorage.getItem('platform');
        console.log(this.plt);
      }

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  goToMenu1(val) {
    this.menu1Selected = val;
    console.log(val);
  }

  openMenu(pages) {
    console.log(pages.subPages);
  }

  expandMenu(title) {
    if (this.showSubMenu === title) {
      this.showSubMenu = '';
    } else {
      this.showSubMenu = title;
    }
    console.log(this.showSubMenu);
  }
}
