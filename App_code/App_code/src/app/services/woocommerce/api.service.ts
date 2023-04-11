/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.wooCommerce.baseUrl;
  ck = environment.wooCommerce.ck;
  cs = environment.wooCommerce.cs;

  constructor(private http: HttpClient) {}

  getProducts() {

    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });

    // return new Promise(resolve => {
    //   this.http
    //     .get(
    //       `${this.baseUrl}/wp-json/wc/v3/products?consumer_key=${
    //         this.ck
    //         }&consumer_secret=${this.cs}`
    //     )
    //     .subscribe(productData => {
    //       resolve(productData);
    //     });
    // });
  }

  // getProduct(pid) {
  //   return new Promise(resolve => {
  //     this.http
  //       .get(
  //         `${this.baseUrl}/wp-json/wc/v3/products/${pid}?consumer_key=${
  //         this.ck
  //         }&consumer_secret=${this.cs}`
  //       )
  //       .subscribe(productData => {
  //         resolve(productData);
  //       });
  //   });
  // }
}
