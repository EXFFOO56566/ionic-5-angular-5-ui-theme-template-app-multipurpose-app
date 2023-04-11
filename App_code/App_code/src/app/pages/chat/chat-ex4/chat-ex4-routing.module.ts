import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatEx4Page } from './chat-ex4.page';

const routes: Routes = [
  {
    path: '',
    component: ChatEx4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatEx4PageRoutingModule {}
