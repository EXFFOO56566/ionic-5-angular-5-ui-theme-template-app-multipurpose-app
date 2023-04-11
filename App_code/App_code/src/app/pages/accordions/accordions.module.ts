import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionsPageRoutingModule } from './accordions-routing.module';

import { AccordionsPage } from './accordions.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionsPageRoutingModule,
    ComponentModule
  ],
  declarations: [AccordionsPage]
})
export class AccordionsPageModule { }
