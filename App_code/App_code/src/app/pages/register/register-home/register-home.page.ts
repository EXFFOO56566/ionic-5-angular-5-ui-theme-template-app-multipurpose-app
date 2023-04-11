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
  selector: 'app-register-home',
  templateUrl: './register-home.page.html',
  styleUrls: ['./register-home.page.scss'],
})
export class RegisterHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToReg1() {
    this.router.navigate(['/register-ex1']);
  }

  goToReg2() {
    this.router.navigate(['/register-ex2']);
  }

  goToReg3() {
    this.router.navigate(['/register-ex3']);
  }

  goToReg4() {
    this.router.navigate(['/register-ex4']);
  }

  goToReg5() {
    this.router.navigate(['/register-ex5']);
  }

  goToReg6() {
    this.router.navigate(['/register-ex6']);
  }

}
