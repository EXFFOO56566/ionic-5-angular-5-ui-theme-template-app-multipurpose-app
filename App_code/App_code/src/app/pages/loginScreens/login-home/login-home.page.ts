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
  selector: 'app-login-home',
  templateUrl: './login-home.page.html',
  styleUrls: ['./login-home.page.scss'],
})
export class LoginHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin1() {
    this.router.navigate(['/login-ex1']);
  }

  goToLogin2() {
    this.router.navigate(['/login-ex2']);
  }

  goToLogin3() {
    this.router.navigate(['/login-ex3']);
  }

  goToLogin4() {
    this.router.navigate(['/login-ex4']);
  }

  goToLogin5() {
    this.router.navigate(['/login-ex5']);
  }

  goToLogin6() {
    this.router.navigate(['/login-ex6']);
  }

}
