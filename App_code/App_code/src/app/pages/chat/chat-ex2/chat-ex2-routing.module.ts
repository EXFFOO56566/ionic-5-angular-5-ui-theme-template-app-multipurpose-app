import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatEx2Page } from './chat-ex2.page';

const routes: Routes = [
  {
    path: '',
    component: ChatEx2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatEx2PageRoutingModule {}
