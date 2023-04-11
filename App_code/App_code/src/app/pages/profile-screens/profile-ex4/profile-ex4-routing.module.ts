import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEx4Page } from './profile-ex4.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEx4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEx4PageRoutingModule {}
