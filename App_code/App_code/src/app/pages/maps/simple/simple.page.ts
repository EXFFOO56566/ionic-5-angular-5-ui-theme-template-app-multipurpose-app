/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-simple',
  templateUrl: './simple.page.html',
  styleUrls: ['./simple.page.scss'],
})
export class SimplePage implements OnInit {
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;
  constructor() { }

  ngOnInit() {
    this.loadMap();
  }
  loadMap() {
    const latLng = new google.maps.LatLng('21.7606883', '72.1534491');
    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
