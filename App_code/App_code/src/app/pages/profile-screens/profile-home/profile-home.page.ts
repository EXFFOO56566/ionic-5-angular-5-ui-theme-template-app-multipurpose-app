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
  selector: 'app-profile-home',
  templateUrl: './profile-home.page.html',
  styleUrls: ['./profile-home.page.scss'],
})
export class ProfileHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProfile_1() {
    this.router.navigate(['/profile-ex1']);
  }

  goToProfile_2() {
    this.router.navigate(['/profile-ex2']);
  }

  goToProfile_3() {
    this.router.navigate(['/profile-ex3']);
  }

  goToProfile_4() {
    this.router.navigate(['/profile-ex4']);
  }

  goToProfile_5() {
    this.router.navigate(['/profile-ex5']);
  }

}
