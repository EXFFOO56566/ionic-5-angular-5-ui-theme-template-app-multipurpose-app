/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.page.html',
  styleUrls: ['./accordions.page.scss'],
})
export class AccordionsPage implements OnInit {
  information: any[];
  automaticClose = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/information.json').subscribe(res => {
      this.information = res['items'];
      this.information[0].open = true;
    });
  }

  toggleSection(index) {
    this.information[index].open = !this.information[index].open;

    if (this.automaticClose && this.information[index].open) {
      this.information
        .filter((item, itemIndex) => itemIndex != index)
        .map(item => item.open = false);
    }
  }

  toggleItem(index, childIndex) {
    this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;
  }
  ngOnInit() {

  }
}
