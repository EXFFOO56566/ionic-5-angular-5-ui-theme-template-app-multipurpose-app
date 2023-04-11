/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-translate',
  templateUrl: './translate.page.html',
  styleUrls: ['./translate.page.scss'],
})
export class TranslatePage implements OnInit {
  selectedLanguage: string;
  constructor(
    private _translate: TranslateService
  ) { }

  ngOnInit() {
  }
  /**
  * Give params language 
  * @param lang recibe idioma en formato de XX.
  */
  translateLang(lang: string) {
    this._translate.use(lang);
  }

}
