/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { GridServiceService } from 'src/app/services/grid/grid-service.service';

@Component({
  selector: 'app-grid-ex2',
  templateUrl: './grid-ex2.page.html',
  styleUrls: ['./grid-ex2.page.scss'],
})
export class GridEx2Page implements OnInit {

  dummyData = [];

  constructor(private grid: GridServiceService) {
    this.dummyData = this.grid.data;
  }

  ngOnInit() {
  }

}
