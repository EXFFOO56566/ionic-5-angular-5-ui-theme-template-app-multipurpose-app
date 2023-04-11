/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google;
@Component({
  selector: 'app-styled',
  templateUrl: './styled.page.html',
  styleUrls: ['./styled.page.scss'],
})
export class StyledPage implements OnInit {
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;
  radius: any;
  circle: any;
  latOri = 21.7606883;
  longOri = 72.1534491;

  constructor() {
    this.radius = 10;
  }

  ngOnInit() {
    this.loadMap(this.latOri, this.longOri);
  }

  loadMap(lat, lng) {

    const latLng = new google.maps.LatLng(lat, lng);

    const mapOptions = {
      center: latLng,
      zoom: 8,
      scaleControl: false,
      streetViewControl: false,
      zoomControl: false,
      overviewMapControl: false,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    const marker = new google.maps.Marker({
      map: this.map,
      position: latLng
    });
    const sunCircle = {
      strokeColor: "#49befc",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#49befc",
      fillOpacity: 0.35,
      map: this.map,
      center: latLng,
      radius: this.radius * 1000 // in meters
    };
    this.circle = new google.maps.Circle(sunCircle);
    this.circle.bindTo('center', marker, 'position');

  }
  changeMap() {
    console.log('radius', this.radius);
    this.circle.setRadius(this.radius * 1000);
  }

  updateIt() {
    console.log('uodate it');
  }

}
