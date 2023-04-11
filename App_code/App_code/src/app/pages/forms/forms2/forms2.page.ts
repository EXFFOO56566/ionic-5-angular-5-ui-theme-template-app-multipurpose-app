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
  selector: 'app-forms2',
  templateUrl: './forms2.page.html',
  styleUrls: ['./forms2.page.scss'],
})
export class Forms2Page implements OnInit {
  rate = '2';
  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {
  }
  onRatingChange(event) {
    console.log('event', event)
  }
  ratnow() {
    this.util.showToast('Thanks For Ratting & your valuable time', 'success', 'bottom');
  }
}
