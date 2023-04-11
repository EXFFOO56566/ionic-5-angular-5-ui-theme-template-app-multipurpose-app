/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { ChatDataService } from 'src/app/services/chats/chat-data.service';

@Component({
  selector: 'app-chat-ex2',
  templateUrl: './chat-ex2.page.html',
  styleUrls: ['./chat-ex2.page.scss'],
})
export class ChatEx2Page implements OnInit {

  msgs = [];
  constructor(private chat: ChatDataService) {
    this.msgs = this.chat.messages;
  }

  ngOnInit() {
  }

}
