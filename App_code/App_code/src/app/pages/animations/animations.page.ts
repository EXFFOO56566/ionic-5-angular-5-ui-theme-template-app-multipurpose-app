
/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-animations',
  templateUrl: './animations.page.html',
  styleUrls: ['./animations.page.scss'],
})
export class AnimationsPage implements OnInit {
  animation: any = 'bounce';
  arrayAnimation: any[] = [
    "flash",
    "bounce",
    "pulse",
    "rubberBand",
    "shake",
    "headShake",
    "wobble", "jello", "bounceIn", "bounceInDown",
    "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut",
    "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp",
    "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft"
  ]
  constructor() { }

  ngOnInit() {
  }

  getName() {
    return 'bgColor animated ' + this.animation;
  }
}
