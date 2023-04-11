import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatEx5Page } from './chat-ex5.page';

const routes: Routes = [
  {
    path: '',
    component: ChatEx5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatEx5PageRoutingModule {}
