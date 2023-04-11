import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Parallax5PageRoutingModule } from './parallax5-routing.module';

import { Parallax5Page } from './parallax5.page';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Parallax5PageRoutingModule,
    SharedModule
  ],
  declarations: [Parallax5Page]
})
export class Parallax5PageModule {}
