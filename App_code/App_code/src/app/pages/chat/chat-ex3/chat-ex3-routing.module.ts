import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatEx3Page } from './chat-ex3.page';

const routes: Routes = [
  {
    path: '',
    component: ChatEx3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatEx3PageRoutingModule {}
