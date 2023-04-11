import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemRibbonPage } from './item-ribbon.page';

const routes: Routes = [
  {
    path: '',
    component: ItemRibbonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemRibbonPageRoutingModule {}
