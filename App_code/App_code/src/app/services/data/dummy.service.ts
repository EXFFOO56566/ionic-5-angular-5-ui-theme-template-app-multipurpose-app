/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor() { }

  public sidemenu = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Firebase',
      url: '/firebase',
      icon: 'logo-firebase'
    },
    {
      title: 'Chat',
      url: '/chat-home',
      icon: 'chatbubbles'
    },
    {
      title: 'Slider',
      url: '/slider-home',
      icon: 'albums'
    },
    {
      title: 'Login',
      url: '/login-home',
      icon: 'log-in'
    },
    {
      title: 'Sign Up',
      url: '/register-home',
      icon: 'create'
    },
    {
      title: 'Grid',
      url: '/grid-home',
      icon: 'grid'
    },
    {
      title: 'Profile',
      url: '/profile-home',
      icon: 'people'
    },
    {
      title: 'E-Commerce',
      url: '/example-home',
      icon: 'cart'
    },
    {
      title: 'Side Menu',
      url: '/sidemenu-home',
      icon: 'menu'
    },
    {
      title: 'Time Line',
      url: '/timeline-home',
      icon: 'ellipsis-vertical'
    },
    {
      title: 'Forms',
      url: '/forms',
      icon: 'newspaper'
    },
    {
      title: 'OTP Verification',
      url: '/verification',
      icon: 'lock-open'
    },
    {
      title: 'Animations',
      url: '/animations',
      icon: 'cube'
    },
    {
      title: 'Calendars',
      url: '/calendars',
      icon: 'calendar'
    },
    {
      title: 'Input Mask',
      url: '/input-mask',
      icon: 'text'
    },
    {
      title: 'Tooltip',
      url: '/tooltip',
      icon: 'warning'
    },
    {
      title: 'Payment',
      url: '/payment-home',
      icon: 'card'
    },
    {
      title: 'Rest APIs',
      url: '/rest',
      icon: 'globe'
    },
    {
      title: 'Parallax',
      url: '/parallax-home',
      icon: 'expand'
    },
    {
      title: 'Maps',
      url: '/maps',
      icon: 'map'
    },
    {
      title: 'Charts',
      url: '/charts',
      icon: 'bar-chart'
    },
    {
      title: 'Accordions',
      url: '/accordions',
      icon: 'expand'
    },
    {
      title: 'Item Ribbon',
      url: 'item-ribbon',
      icon: 'ribbon'
    },
    {
      title: 'Ck Editor',
      url: '/ck-editor',
      icon: 'create'
    },
    {
      title: 'Signature Pad',
      url: '/signature-pad',
      icon: 'document'
    },
    {
      title: 'Translate',
      url: '/translate',
      icon: 'language'
    },
    {
      title: 'Theme',
      url: '/theme',
      icon: 'color-palette'
    },
    {
      title: 'Tabs',
      url: '/tabs2',
      icon: 'navigate'
    },
    {
      title: 'Video Player',
      url: '/video-player',
      icon: 'tv'
    },
    {
      title: 'Offline Storage',
      url: '/offline-home',
      icon: 'cloud-offline'
    },
    {
      title: 'admob',
      url: '/admob',
      icon: 'trophy'
    },
    {
      title: 'Barcode Scanner',
      url: '/barcode-scanner',
      icon: 'barcode'
    }
  ];
}
