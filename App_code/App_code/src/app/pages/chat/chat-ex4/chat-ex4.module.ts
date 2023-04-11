import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatEx4PageRoutingModule } from './chat-ex4-routing.module';

import { ChatEx4Page } from './chat-ex4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatEx4PageRoutingModule
  ],
  declarations: [ChatEx4Page]
})
export class ChatEx4PageModule {}
