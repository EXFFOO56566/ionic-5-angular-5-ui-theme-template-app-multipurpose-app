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
  selector: 'app-rest',
  templateUrl: './rest.page.html',
  styleUrls: ['./rest.page.scss'],
})
export class RestPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  restLogin() {
    this.router.navigate(['rest-login']);
  }
  restSignup() {
    this.router.navigate(['rest-register']);
  }
  restList() {
    this.router.navigate(['rest-home']);
  }
  restimageUpload() {
    this.router.navigate(['rest-image-list']);
  }

}
