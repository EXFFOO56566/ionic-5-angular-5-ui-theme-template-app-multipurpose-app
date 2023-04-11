import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TooltipPageRoutingModule } from './tooltip-routing.module';

import { TooltipPage } from './tooltip.page';
//https://www.npmjs.com/package/ng2-tooltip-directive
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TooltipPageRoutingModule,
    TooltipModule
  ],
  declarations: [TooltipPage]
})
export class TooltipPageModule { }
