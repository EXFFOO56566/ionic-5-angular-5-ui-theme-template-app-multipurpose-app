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
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  example(id) {

    if (id === '1') {
      this.router.navigate(['forms1']);
      return true;
    }
    if (id === '2') {
      this.router.navigate(['forms2']);
      return true;
    }
    if (id === '3') {
      this.router.navigate(['forms3']);
      return true;
    }
    if (id === '4') {
      this.router.navigate(['forms4']);
      return true;
    }
  }
}
