import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidemenuHomePage } from './sidemenu-home.page';

const routes: Routes = [
  {
    path: '',
    component: SidemenuHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemenuHomePageRoutingModule {}
