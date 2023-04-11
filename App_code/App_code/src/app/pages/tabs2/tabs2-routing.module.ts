import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabs2Page } from './tabs2.page';

const routes: Routes = [
  {
    path: '',
    component: Tabs2Page
  },
  {
    path: '',
    component: Tabs2Page,
    children: [
      {
        path: 'grid-ex1',
        loadChildren: '../gridScreens/grid-ex1/grid-ex1.module#GridEx1PageModule'
      },
      {
        path: 'grid-ex2',
        loadChildren: '../gridScreens/grid-ex2/grid-ex2.module#GridEx2PageModule'
      },
      {
        path: 'grid-ex3',
        loadChildren: '../gridScreens/grid-ex3/grid-ex3.module#GridEx3PageModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabs2PageRoutingModule {}
