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
  selector: 'app-forms1',
  templateUrl: './forms1.page.html',
  styleUrls: ['./forms1.page.scss'],
})
export class Forms1Page implements OnInit {

  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {
  }
  sendMessage() {
    this.util.showToast('Message sent', 'success', 'bottom');
  }

}
