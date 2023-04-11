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
export class ParallaxService {

  card = [
    {
      name: 'Apple',
      descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.It has survived not only five centuries,`,
      image: 'assets/imgs/parallax/apple.jpeg'
    },
    {
      name: 'Oranges',
      descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.It has survived not only five centuries,`,
      image: 'assets/imgs/parallax/orange.jpg'
    },
    {
      name: 'Cherrys',
      descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.It has survived not only five centuries,`,
      image: 'assets/imgs/parallax/chrerry.jpg'
    },
    {
      name: 'Bananas',
      descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.It has survived not only five centuries,`,
      image: 'assets/imgs/parallax/bananas.jpg'
    }
  ];

  constructor() { }
}
