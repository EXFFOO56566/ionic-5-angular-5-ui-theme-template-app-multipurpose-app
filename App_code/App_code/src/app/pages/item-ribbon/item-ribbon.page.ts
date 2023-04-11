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
  selector: 'app-item-ribbon',
  templateUrl: './item-ribbon.page.html',
  styleUrls: ['./item-ribbon.page.scss'],
})
export class ItemRibbonPage implements OnInit {
  public thumbnails: { title: string, image: string, ribbonText: string, class: string }[] = [
    { title: 'Awesome Shoes - $9', image: 'assets/ribbons/shoes.jpg', ribbonText: 'sale', class: 'sale' },
    { title: 'Awesome Team', image: 'assets/ribbons/cruzeiro.jpg', ribbonText: 'awesome', class: 'cruzeiro' },
    { title: 'Bad team', image: 'assets/ribbons/atletico.jpg', ribbonText: 'bad', class: 'atletico' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
