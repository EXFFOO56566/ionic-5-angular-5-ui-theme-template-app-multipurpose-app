import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderEx3Page } from './slider-ex3.page';

const routes: Routes = [
  {
    path: '',
    component: SliderEx3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderEx3PageRoutingModule {}
