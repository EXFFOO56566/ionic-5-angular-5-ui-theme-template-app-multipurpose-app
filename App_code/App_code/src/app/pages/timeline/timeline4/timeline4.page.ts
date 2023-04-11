/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { TimelineService } from 'src/app/services/timeline/timeline.service';

@Component({
  selector: 'app-timeline4',
  templateUrl: './timeline4.page.html',
  styleUrls: ['./timeline4.page.scss'],
})
export class Timeline4Page implements OnInit {

  data;
  constructor(private timeline: TimelineService) {
    this.data = this.timeline.tasks;
  }

  ngOnInit() {
  }

}
