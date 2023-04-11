// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/// replace this keys with your keys

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCwyV4b5clKG-UQUdPkRc0siQcP8b_rueo',
    authDomain: 'ionic5starter.firebaseapp.com',
    databaseURL: 'https://ionic5starter.firebaseio.com',
    projectId: 'ionic5starter',
    storageBucket: 'ionic5starter.appspot.com',
    messagingSenderId: '340660990914',
    appId: '1:340660990914:web:312ebd58f1ea5c55025c5b',
    measurementId: 'G-P923T2LNQ1'
  },
  onesignal: {
    appId: '74a15980-c75a-4155-ba4b-e6761c5f39e1',
    googleProjectNumber: '340660990914'
  },
  wooCommerce: {
    baseUrl: 'http://localhost:9999/ion5woo',
    ck: 'ck_aed921bfd3ea2ba24f2fcffb31c83a4928151457',
    cs: 'cs_7ea2fbb867ec8d0fb1d3cc2dbedaefc01cc1bbd3'
  },
  restURL: {
    baseUrl: 'https://initappz.com/rest/index.php/',
    imagePath: 'https://initappz.com/rest/'
  },
  iosAdmob: {
    id: 'ca-app-pub-7024179270071433~2077015492',
    banner: 'ca-app-pub-7024179270071433/6790000717',
    inter: 'ca-app-pub-7024179270071433/7355254728',
    reward: 'ca-app-pub-7024179270071433/5476919045',
    native: 'ca-app-pub-7024179270071433/5094609814'
  },
  androidAdmob: {
    id: 'ca-app-pub-7024179270071433~7556287475',
    banner: 'ca-app-pub-7024179270071433/3980838693',
    inter: 'ca-app-pub-7024179270071433/1354675350',
    reward: 'ca-app-pub-7024179270071433/4134195018',
    native: 'ca-app-pub-7024179270071433/5102348675'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
