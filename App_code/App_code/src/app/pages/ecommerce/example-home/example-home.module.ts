import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleHomePageRoutingModule } from './example-home-routing.module';

import { ExampleHomePage } from './example-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExampleHomePageRoutingModule
  ],
  declarations: [ExampleHomePage]
})
export class ExampleHomePageModule {}
