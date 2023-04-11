/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-ex4',
  templateUrl: './register-ex4.page.html',
  styleUrls: ['./register-ex4.page.scss'],
})
export class RegisterEx4Page implements OnInit {

  avatars = [
    {
      img: '1.jpg',
      seleccionado: true
    },
    {
      img: '2.png',
      seleccionado: false
    },
    {
      img: '3.jpg',
      seleccionado: false
    },
    {
      img: '4.jpg',
      seleccionado: false
    },
    {
      img: '5.jpg',
      seleccionado: false
    },
    {
      img: '6.jpg',
      seleccionado: false
    },
    {
      img: '7.jpg',
      seleccionado: false
    },
    {
      img: '8.jpg',
      seleccionado: false
    }
  ];

  avatarSlide = {
    slidesPerView: 3.5,
    zoom: false
  };
  plt;

  constructor(private navCtrl: NavController) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  goBack()  {
    this.navCtrl.back();
  }

  seleccionarAvatar(avatar) {
    this.avatars.forEach((av) => (av.seleccionado = false));
    avatar.seleccionado = true;
    console.log(avatar.img);
  }

}
