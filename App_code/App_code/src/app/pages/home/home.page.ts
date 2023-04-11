/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { DummyService } from 'src/app/services/data/dummy.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  dummyData;
  lists;
  constructor(private dummy: DummyService, private adb: AngularFirestore) {
    this.dummyData = this.dummy.sidemenu;
  }

  ngOnInit() {
    this.adb.collection('home')
        .valueChanges()
        .subscribe((lists: any) => {
          console.log('list', lists);
          this.lists = lists;
        });
  }

  openUrl() {
    window.open('https://initappz.com/', '_system');
  }

}
