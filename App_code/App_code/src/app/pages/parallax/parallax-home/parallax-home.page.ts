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
  selector: 'app-parallax-home',
  templateUrl: './parallax-home.page.html',
  styleUrls: ['./parallax-home.page.scss'],
})
export class ParallaxHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToParallex1() {
    this.router.navigate(['/parallax1']);
  }

  goToParallex2() {
    this.router.navigate(['/parallax2']);
  }

  goToParallex3() {
    this.router.navigate(['/parallax5']);
  }
}
