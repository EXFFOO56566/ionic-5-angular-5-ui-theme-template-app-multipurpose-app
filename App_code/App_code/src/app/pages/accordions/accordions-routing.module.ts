import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionsPage } from './accordions.page';

const routes: Routes = [
  {
    path: '',
    component: AccordionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionsPageRoutingModule {}
