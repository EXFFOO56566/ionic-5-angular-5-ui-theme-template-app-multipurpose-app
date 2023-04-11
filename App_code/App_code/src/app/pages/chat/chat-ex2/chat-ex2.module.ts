import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatEx2PageRoutingModule } from './chat-ex2-routing.module';

import { ChatEx2Page } from './chat-ex2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatEx2PageRoutingModule
  ],
  declarations: [ChatEx2Page]
})
export class ChatEx2PageModule {}
