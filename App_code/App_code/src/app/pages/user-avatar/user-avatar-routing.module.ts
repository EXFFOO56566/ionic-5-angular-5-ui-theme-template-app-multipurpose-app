import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAvatarPage } from './user-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: UserAvatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAvatarPageRoutingModule {}
