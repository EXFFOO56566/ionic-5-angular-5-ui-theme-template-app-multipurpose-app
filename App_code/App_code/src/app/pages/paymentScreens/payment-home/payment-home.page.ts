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
  selector: 'app-payment-home',
  templateUrl: './payment-home.page.html',
  styleUrls: ['./payment-home.page.scss'],
})
export class PaymentHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPayment1() {
    this.router.navigate(['/payment1']);
  }

  goToPayment2() {
    this.router.navigate(['/payment2']);
  }

  goToPayment3() {
    this.router.navigate(['/payment3']);
  }

}
