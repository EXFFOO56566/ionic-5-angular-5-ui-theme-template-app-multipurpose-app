import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatEx5PageRoutingModule } from './chat-ex5-routing.module';

import { ChatEx5Page } from './chat-ex5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatEx5PageRoutingModule
  ],
  declarations: [ChatEx5Page]
})
export class ChatEx5PageModule {}
