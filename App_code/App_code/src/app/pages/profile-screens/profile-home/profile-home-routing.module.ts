import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileHomePage } from './profile-home.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileHomePageRoutingModule {}
