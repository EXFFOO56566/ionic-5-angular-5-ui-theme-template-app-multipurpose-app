import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatEx3PageRoutingModule } from './chat-ex3-routing.module';

import { ChatEx3Page } from './chat-ex3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatEx3PageRoutingModule
  ],
  declarations: [ChatEx3Page]
})
export class ChatEx3PageModule {}
