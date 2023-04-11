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
  selector: 'app-example-home',
  templateUrl: './example-home.page.html',
  styleUrls: ['./example-home.page.scss'],
})
export class ExampleHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEx1() {
    this.router.navigate(['/example1']);
  }

  goToEx2() {
    this.router.navigate(['/example2']);
  }

  goToEx3() {
    this.router.navigate(['/example3']);
  }

  goToEx4() {
    this.router.navigate(['/example4']);
  }

  goToEx5() {
    this.router.navigate(['/example5']);
  }

  goToEx10() {
    this.router.navigate(['/example10']);
  }

}
