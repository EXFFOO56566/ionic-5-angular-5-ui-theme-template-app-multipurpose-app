import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEx3Page } from './profile-ex3.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEx3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEx3PageRoutingModule {}
