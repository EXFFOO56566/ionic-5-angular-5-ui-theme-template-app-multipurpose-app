import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StyledPageRoutingModule } from './styled-routing.module';

import { StyledPage } from './styled.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StyledPageRoutingModule
  ],
  declarations: [StyledPage]
})
export class StyledPageModule {}
