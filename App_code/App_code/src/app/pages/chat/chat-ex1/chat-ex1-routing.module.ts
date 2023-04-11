import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatEx1Page } from './chat-ex1.page';

const routes: Routes = [
  {
    path: '',
    component: ChatEx1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatEx1PageRoutingModule {}
