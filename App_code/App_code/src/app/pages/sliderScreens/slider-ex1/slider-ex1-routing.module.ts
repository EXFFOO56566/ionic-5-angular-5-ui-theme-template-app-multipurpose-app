import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderEx1Page } from './slider-ex1.page';

const routes: Routes = [
  {
    path: '',
    component: SliderEx1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderEx1PageRoutingModule {}
