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
  selector: 'app-grid-home',
  templateUrl: './grid-home.page.html',
  styleUrls: ['./grid-home.page.scss'],
})
export class GridHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToGrid_1() {
    this.router.navigate(['/grid-ex1']);
  }

  goToGrid_2() {
    this.router.navigate(['/grid-ex2']);
  }

  goToGrid_3() {
    this.router.navigate(['/grid-ex3']);
  }

  goToGrid_4() {
    this.router.navigate(['/grid-ex4']);
  }

  goToGrid_5() {
    this.router.navigate(['/grid-ex5']);
  }

  goToGrid_6() {
    this.router.navigate(['/grid-ex6']);
  }

}
