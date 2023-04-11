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
  selector: 'app-payment3',
  templateUrl: './payment3.page.html',
  styleUrls: ['./payment3.page.scss'],
})
export class Payment3Page implements OnInit {

  id;
  constructor() { }

  ngOnInit() {
  }

  changeMethod(val) {
    this.id = val;
  }

}
