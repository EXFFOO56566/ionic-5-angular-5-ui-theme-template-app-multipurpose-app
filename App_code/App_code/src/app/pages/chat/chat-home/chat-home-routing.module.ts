import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatHomePage } from './chat-home.page';

const routes: Routes = [
  {
    path: '',
    component: ChatHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatHomePageRoutingModule {}
