/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/woocommerce/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  products;
  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.getAllProducts();
  }

  // getAllProducts() {
  //   this.api.getProducts().then((res) => {
  //     this.products = res;
  //     console.log(this.products);
  //   }, err => {
  //     console.log(err);
  //   }).catch(e => {
  //     console.log(e);
  //   });
  // }

}
