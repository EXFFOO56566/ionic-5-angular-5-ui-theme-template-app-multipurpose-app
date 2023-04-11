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
  selector: 'app-firebase',
  templateUrl: './firebase.page.html',
  styleUrls: ['./firebase.page.scss'],
})
export class FirebasePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  firebaseLogin() {
    this.router.navigate(['fireLogin']);
  }
  firebaseSignup() {
    this.router.navigate(['fireRegister']);
  }
  firebaseList() {
    this.router.navigate(['fireHome']);
  }
  firebaseimageUpload() {
    this.router.navigate(['fire-image-list']);
  }

}
