import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParallaxHomePage } from './parallax-home.page';

const routes: Routes = [
  {
    path: '',
    component: ParallaxHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParallaxHomePageRoutingModule {}
