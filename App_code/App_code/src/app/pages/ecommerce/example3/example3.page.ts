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
  selector: 'app-example3',
  templateUrl: './example3.page.html',
  styleUrls: ['./example3.page.scss'],
})
export class Example3Page implements OnInit {

  id = 1;
  constructor() { }

  ngOnInit() {
  }

  onClick(val) {
    this.id = val;
  }

}
