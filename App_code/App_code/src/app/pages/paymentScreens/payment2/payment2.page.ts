/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.page.html',
  styleUrls: ['./payment2.page.scss'],
})
export class Payment2Page implements OnInit {

  value;
  constructor() { }

  ngOnInit() {
  }

  checkedChange(eve) {
    console.log(eve.detail.value);
    this.value = eve.detail.value;
  }

}
