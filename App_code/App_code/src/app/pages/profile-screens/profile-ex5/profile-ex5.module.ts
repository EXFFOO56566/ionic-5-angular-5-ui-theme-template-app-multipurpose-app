import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEx5PageRoutingModule } from './profile-ex5-routing.module';

import { ProfileEx5Page } from './profile-ex5.page';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEx5PageRoutingModule,
    NgCircleProgressModule.forRoot({
      backgroundPadding : -50,
      radius : 20,
      space : 19,
      maxPercent : 90,
      unitsFontSize : '12',
      outerStrokeGradient : false,
      outerStrokeWidth : 2,
      outerStrokeColor : '#4882c2',
      outerStrokeGradientStopColor : '#53a9ff',
      innerStrokeColor : '#e7e8ea',
      innerStrokeWidth : 0,
      titleFontSize : '11',
      imageHeight : 20,
      imageWidth : 20,
      animateTitle : false,
      animationDuration : 1000,
      showTitle : false,
      showUnits : false,
      showBackground : false,
      clockwise : false,
      startFromZero : false
    })
  ],
  declarations: [ProfileEx5Page]
})
export class ProfileEx5PageModule {}
