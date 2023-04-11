import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEx5Page } from './profile-ex5.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEx5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEx5PageRoutingModule {}
