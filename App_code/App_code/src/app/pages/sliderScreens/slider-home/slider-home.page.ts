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
  selector: 'app-slider-home',
  templateUrl: './slider-home.page.html',
  styleUrls: ['./slider-home.page.scss'],
})
export class SliderHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSlider1() {
    this.router.navigate(['/slider-ex1']);
  }

  goToSlider2() {
    this.router.navigate(['/slider-ex2']);
  }

  goToSlider3() {
    this.router.navigate(['/slider-ex3']);
  }

}
