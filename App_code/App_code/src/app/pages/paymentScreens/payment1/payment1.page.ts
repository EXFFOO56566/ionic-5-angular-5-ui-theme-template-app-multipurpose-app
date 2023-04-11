/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-payment1',
  templateUrl: './payment1.page.html',
  styleUrls: ['./payment1.page.scss'],
})
export class Payment1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPaymentNext() {
    this.router.navigate(['/payment-next']);
  }

}
