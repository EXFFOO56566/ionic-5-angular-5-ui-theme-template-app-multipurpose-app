import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEx2Page } from './profile-ex2.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEx2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEx2PageRoutingModule {}
