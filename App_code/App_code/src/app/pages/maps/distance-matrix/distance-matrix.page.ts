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
  selector: 'app-distance-matrix',
  templateUrl: './distance-matrix.page.html',
  styleUrls: ['./distance-matrix.page.scss'],
})
export class DistanceMatrixPage implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;
  latOri = 21.7606883;
  longOri = 72.1534491;

  latDest = 21.7616667;
  longDest = 72.1444012;
  constructor() { }

  ngOnInit() {
    this.loadMap(this.latOri, this.longOri, this.latDest, this.longDest);
  }
  loadMap(latOri, lngOri, latDest, lngDest) {

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay = new google.maps.DirectionsRenderer();
    var bounds = new google.maps.LatLngBounds;

    var origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
    var destinationA = { lat: latDest, lng: lngDest };

    var destinationIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=D|FF0000|000000';
    var originIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=O|FFFF00|000000';
    var map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: latOri, lng: lngOri },
      disableDefaultUI: true,
      zoom: 100
    });

    const custPos = new google.maps.LatLng(latOri, lngOri);
    const restPos = new google.maps.LatLng(latDest, lngDest);

    const icon = {
      url: 'assets/avatars/1.jpg',
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    const icon2 = {
      url: 'assets/avatars/2.jpg',
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    var marker = new google.maps.Marker({
      map: map,
      position: custPos,
      animation: google.maps.Animation.DROP,
      icon: icon,
    });
    var markerCust = new google.maps.Marker({
      map: map,
      position: restPos,
      animation: google.maps.Animation.DROP,
      icon: icon2,
    });
    marker.setMap(map);
    markerCust.setMap(map);

    directionsDisplay.setMap(map);
    // directionsDisplay.setOptions({ suppressMarkers: true });
    directionsDisplay.setOptions({
      polylineOptions: {
        strokeWeight: 4,
        strokeOpacity: 1,
        strokeColor: 'red'
      },
      suppressMarkers: true
    });
    var geocoder = new google.maps.Geocoder;

    var service = new google.maps.DistanceMatrixService;

    service.getDistanceMatrix({
      origins: [origin1],
      destinations: [destinationA],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, function (response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;

        var showGeocodedAddressOnMap = function (asDestination) {
          var icon = asDestination ? destinationIcon : originIcon;
          return function (results, status) {
            if (status === 'OK') {
              map.fitBounds(bounds.extend(results[0].geometry.location));
            } else {
              alert('Geocode was not successful due to: ' + status);
            }
          };
        };

        directionsService.route({
          origin: origin1,
          destination: destinationA,
          travelMode: 'DRIVING'
        }, function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });


        for (var i = 0; i < originList.length; i++) {
          var results = response.rows[i].elements;
          geocoder.geocode({ 'address': originList[i] },
            showGeocodedAddressOnMap(false));
          for (var j = 0; j < results.length; j++) {
            geocoder.geocode({ 'address': destinationList[j] },
              showGeocodedAddressOnMap(true));
          }
        }
      }
    });

  }
}
