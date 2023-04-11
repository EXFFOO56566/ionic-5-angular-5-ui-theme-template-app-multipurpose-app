import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatHomePageRoutingModule } from './chat-home-routing.module';

import { ChatHomePage } from './chat-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatHomePageRoutingModule,
  ],
  declarations: [ChatHomePage]
})
export class ChatHomePageModule {}
