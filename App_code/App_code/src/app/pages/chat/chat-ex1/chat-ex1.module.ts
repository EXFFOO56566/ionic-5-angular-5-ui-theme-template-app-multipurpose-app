import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatEx1PageRoutingModule } from './chat-ex1-routing.module';

import { ChatEx1Page } from './chat-ex1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatEx1PageRoutingModule
  ],
  declarations: [ChatEx1Page]
})
export class ChatEx1PageModule {}
