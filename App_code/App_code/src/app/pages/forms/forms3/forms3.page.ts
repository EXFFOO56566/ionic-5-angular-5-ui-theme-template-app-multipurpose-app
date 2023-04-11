/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-forms3',
  templateUrl: './forms3.page.html',
  styleUrls: ['./forms3.page.scss'],
})
export class Forms3Page implements OnInit {
  rate = '2';
  constructor(
    private util: UtilService
  ) { }
  ngOnInit() {
  }
  onRatingChange(event) {
    console.log('event', event)
  }
  sendMessage() {
    this.util.showToast('Message sent', 'success', 'bottom');
  }

}
