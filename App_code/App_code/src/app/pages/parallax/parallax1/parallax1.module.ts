import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Parallax1PageRoutingModule } from './parallax1-routing.module';

import { Parallax1Page } from './parallax1.page';

import { ParallaxHeaderDirective } from 'src/app/directives/parallax-header.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Parallax1PageRoutingModule
  ],
  declarations: [Parallax1Page, ParallaxHeaderDirective]
})
export class Parallax1PageModule {}
