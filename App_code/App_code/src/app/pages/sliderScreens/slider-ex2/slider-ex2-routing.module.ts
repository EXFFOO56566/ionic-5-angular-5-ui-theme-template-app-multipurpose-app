import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderEx2Page } from './slider-ex2.page';

const routes: Routes = [
  {
    path: '',
    component: SliderEx2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderEx2PageRoutingModule {}
