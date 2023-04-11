/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
})
export class BarcodeScannerPage implements OnInit {

  value;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  onClick() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.value = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
