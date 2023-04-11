/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class RestAPIsService {
  baseUrl: any = '';
  imagePath: any;
  constructor(
    private http: HTTP
  ) {
    this.baseUrl = environment.restURL.baseUrl;
    this.imagePath = environment.restURL.imagePath;
  }

  post(param, link) {
    return this.http.post(this.baseUrl + link, param, {});
  }

  get(link) {
    return this.http.post(this.baseUrl + link, {}, {});
  }

}
