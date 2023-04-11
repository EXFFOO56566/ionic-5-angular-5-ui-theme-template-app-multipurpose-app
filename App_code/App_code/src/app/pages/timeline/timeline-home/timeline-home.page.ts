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
  selector: 'app-timeline-home',
  templateUrl: './timeline-home.page.html',
  styleUrls: ['./timeline-home.page.scss'],
})
export class TimelineHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTimeline1() {
    this.router.navigate(['/timeline1']);
  }

  goToTimeline2() {
    this.router.navigate(['/timeline2']);
  }

  goToTimeline3() {
    this.router.navigate(['/timeline3']);
  }

  goToTimeline4() {
    this.router.navigate(['/timeline4']);
  }

}
