/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { SwipeTabDirective } from 'src/app/directives/swipe-tab.directive';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs2.page.html',
  styleUrls: ['./tabs2.page.scss'],
})
export class Tabs2Page implements OnInit {

  @ViewChild(SwipeTabDirective, { static: false }) swipeTabDirective: SwipeTabDirective;
  @ViewChild('myTabs', { static: false }) tabRef: IonTabs;

  constructor() { }

  ngOnInit() {
  }

  ionTabsDidChange($event) {
    // console.log('[TabsPage] ionTabsDidChange, $event: ', $event);
    // console.log("=====", this.swipeTabDirective);
    // console.log("=====", this.swipeTabDirective);
    this.swipeTabDirective.onTabInitialized($event.tab);
  }

  onTabChange($event) {
    // console.log('[TabsPage] onTabChange, $event: ', $event);
    this.tabRef.select($event);
  }

}
