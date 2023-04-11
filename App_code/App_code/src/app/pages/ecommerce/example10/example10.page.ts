/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products/products.service';


@Component({
  selector: 'app-example10',
  templateUrl: './example10.page.html',
  styleUrls: ['./example10.page.scss'],
})
export class Example10Page implements OnInit {

  allProducts;
  value = 1;
  constructor(private products: ProductsService) {
    this.allProducts = this.products.products;
  }

  ngOnInit() {
  }

  plus() {
    this.value = this.value + 1;
  }
  minus() {
    this.value = this.value - 1;
  }

}
