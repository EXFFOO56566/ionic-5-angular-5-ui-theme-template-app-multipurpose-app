/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


/// native plugins
import { Camera } from '@ionic-native/camera/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';


//// firebase setup
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { environment } from 'src/environments/environment';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { GridModelPageModule } from './pages/gridScreens/grid-model/grid-model.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HTTP } from '@ionic-native/http/ngx';
import { SignaturePickerPageModule } from './modals/signature-picker/signature-picker.module';

//// Offline storage
import { SQLite } from '@ionic-native/sqlite/ngx';


// Admob
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

//Translate Serives
//https://ionicframework.com/docs/v3/developer-resources/ng2-translate/
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function customTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    GridModelPageModule,
    NgCircleProgressModule.forRoot({
      backgroundPadding: -50,
      radius: 20,
      space: 19,
      maxPercent: 90,
      unitsFontSize: '12',
      outerStrokeGradient: false,
      outerStrokeWidth: 2,
      outerStrokeColor: '#4882c2',
      outerStrokeGradientStopColor: '#53a9ff',
      innerStrokeColor: '#e7e8ea',
      innerStrokeWidth: 0,
      titleFontSize: '11',
      imageHeight: 20,
      imageWidth: 20,
      animateTitle: false,
      animationDuration: 1000,
      showTitle: false,
      showUnits: false,
      showBackground: false,
      clockwise: false,
      startFromZero: false
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: customTranslateLoader,
        deps: [HttpClient]
      }
    }),
    SignaturePickerPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    OneSignal,
    HTTP,
    SQLite,
    AdMobPro,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
