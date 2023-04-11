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
  selector: 'app-example2',
  templateUrl: './example2.page.html',
  styleUrls: ['./example2.page.scss'],
})
export class Example2Page implements OnInit {

  id;

  allProducts;

  constructor(private products: ProductsService) {
    this.allProducts = this.products.products;
  }

  ngOnInit() {
  }

  onClick(val) {
    this.id = val;
  }

}
