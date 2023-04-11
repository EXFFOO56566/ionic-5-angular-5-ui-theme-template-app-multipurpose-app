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
  selector: 'app-chat-home',
  templateUrl: './chat-home.page.html',
  styleUrls: ['./chat-home.page.scss'],
})
export class ChatHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToChat_1() {
    this.router.navigate(['/chat-ex1']);
  }

  goToChat_2() {
    this.router.navigate(['/chat-ex2']);
  }

  goToChat_3() {
    this.router.navigate(['/chat-ex3']);
  }

  goToChat_4() {
    this.router.navigate(['/chat-ex4']);
  }

  // goToChat_5() {
  //   this.router.navigate(['/chat-ex5']);
  // }

}
