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
export class ChatDataService {

  messages = [
    {
      side : 'left',
      msg : 'Hello'
    },
    {
      side : 'right',
      msg : 'Hii'
    },
    {
      side : 'left',
      msg : 'Are you nearby ?'
    },
    {
      side : 'right',
      msg : 'I will be there in few mins'
    },
    {
      side : 'left',
      msg : 'Ok, I am waiting at vinmark Store'
    },
    {
      side : 'right',
      msg : 'Sorry I am stuck in traffic. Please give me a moment.'
    }
  ];
  constructor() { }
}
