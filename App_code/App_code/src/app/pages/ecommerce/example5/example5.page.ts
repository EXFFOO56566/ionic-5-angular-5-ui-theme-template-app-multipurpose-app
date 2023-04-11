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
  selector: 'app-example5',
  templateUrl: './example5.page.html',
  styleUrls: ['./example5.page.scss'],
})
export class Example5Page implements OnInit {

  allProducts;

  constructor(private products: ProductsService) {
    this.allProducts = this.products.products;
  }

  ngOnInit() {
  }

}
