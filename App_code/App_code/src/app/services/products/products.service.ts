/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {
      name : 'Lady Brown bag',
      url : 'assets/imgs/products/bag.jpg',
      price : '200.00'
    },
    {
      name : 'Man Black Hoodie',
      url : 'assets/imgs/products/hoodie.jpg',
      price : '250.00'
    },
    {
      name : 'Adidas T-shirts',
      url : 'assets/imgs/products/tshirt.jpg',
      price : '250.00'
    },
    {
      name : 'Beautiful Lady Hat',
      url : 'assets/imgs/products/hat.jpg',
      price : '100.00'
    },
    {
      name : 'Nike Shoes',
      url : 'assets/imgs/products/shoes.jpg',
      price : '300.00'
    },
    {
      name : 'High Heels for Girls',
      url : 'assets/imgs/products/sandal.jpg',
      price : '270.00'
    },
    {
      // tslint:disable-next-line: quotemark
      name : "Boy's Cap",
      url : 'assets/imgs/products/cap.jpg',
      price : '150.00'
    }
  ];
  constructor() { }
}
