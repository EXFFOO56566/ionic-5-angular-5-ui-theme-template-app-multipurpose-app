import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEx1Page } from './profile-ex1.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEx1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEx1PageRoutingModule {}
