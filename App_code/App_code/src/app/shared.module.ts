/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { NgModule } from '@angular/core';
import { DirectivesModule } from './directives/directives.module';
@NgModule({
    imports: [
        DirectivesModule
    ],
    exports: [
        DirectivesModule
    ]
})
export class SharedModule { }
