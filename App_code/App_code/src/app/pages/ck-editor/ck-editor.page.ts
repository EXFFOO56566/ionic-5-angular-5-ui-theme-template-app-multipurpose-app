/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.page.html',
  styleUrls: ['./ck-editor.page.scss'],
})
export class CkEditorPage implements OnInit {
  ckeditorContent: any = '';
  constructor() { }

  ngOnInit() {
  }
  onChange(event) {
    console.log('events', event);
  }
}
