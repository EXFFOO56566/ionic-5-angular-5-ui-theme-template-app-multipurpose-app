import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CkEditorPageRoutingModule } from './ck-editor-routing.module';

import { CkEditorPage } from './ck-editor.page';
import { CKEditorModule } from 'ng2-ckeditor';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CkEditorPageRoutingModule,
    CKEditorModule
  ],
  declarations: [CkEditorPage]
})
export class CkEditorPageModule { }
