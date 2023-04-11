import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleHomePage } from './example-home.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleHomePageRoutingModule {}
