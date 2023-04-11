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
import { ModalController } from '@ionic/angular';
import { GridModelPage } from '../grid-model/grid-model.page';

@Component({
  selector: 'app-grid-ex6',
  templateUrl: './grid-ex6.page.html',
  styleUrls: ['./grid-ex6.page.scss'],
})
export class GridEx6Page implements OnInit {

  dummyData = [];

  constructor(private grid: GridServiceService, private modalController: ModalController) {
    this.dummyData = this.grid.data;
  }

  ngOnInit() {
  }

  async onClick(val) {
    const modal = await this.modalController.create({
      component: GridModelPage,
      componentProps: {
        'url': val
      }
    });
    return await modal.present();
  }

}
