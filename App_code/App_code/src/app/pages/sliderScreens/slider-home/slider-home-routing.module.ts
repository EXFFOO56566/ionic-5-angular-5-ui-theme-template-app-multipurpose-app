import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderHomePage } from './slider-home.page';

const routes: Routes = [
  {
    path: '',
    component: SliderHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderHomePageRoutingModule {}
