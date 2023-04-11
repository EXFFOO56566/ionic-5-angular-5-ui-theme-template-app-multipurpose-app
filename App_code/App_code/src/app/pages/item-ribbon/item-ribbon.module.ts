import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemRibbonPageRoutingModule } from './item-ribbon-routing.module';

import { ItemRibbonPage } from './item-ribbon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemRibbonPageRoutingModule
  ],
  declarations: [ItemRibbonPage]
})
export class ItemRibbonPageModule {}
