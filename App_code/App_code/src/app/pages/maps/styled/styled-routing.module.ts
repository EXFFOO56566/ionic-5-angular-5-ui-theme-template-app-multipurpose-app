import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StyledPage } from './styled.page';

const routes: Routes = [
  {
    path: '',
    component: StyledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyledPageRoutingModule {}
