import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslatePageRoutingModule } from './translate-routing.module';

import { TranslatePage } from './translate.page';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { customTranslateLoader } from 'src/app/app.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslatePageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: customTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [TranslatePage]
})
export class TranslatePageModule { }
