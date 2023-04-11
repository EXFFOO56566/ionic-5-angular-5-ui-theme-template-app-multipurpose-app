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
export class GridServiceService {

  data = [
    {
      url : 'assets/imgs/image1.jpg',
      name : 'Image 1'
    },
    {
      url : 'assets/imgs/image2.jpg',
      name : 'Image 2'
    },
    {
      url : 'assets/imgs/image3.jpg',
      name : 'Image 3'
    },
    {
      url : 'assets/imgs/image4.jpg',
      name : 'Image 4'
    },
    {
      url : 'assets/imgs/image5.jpg',
      name : 'Image 5'
    },
    {
      url : 'assets/imgs/image6.jpg',
      name : 'Image 6'
    },
    {
      url : 'assets/imgs/image7.jpg',
      name : 'Image 7'
    },
    {
      url : 'assets/imgs/image8.jpg',
      name : 'Image 8'
    },
    {
      url : 'assets/imgs/image9.jpg',
      name : 'Image 9'
    },
    {
      url : 'assets/imgs/image10.jpg',
      name : 'Image 10'
    }
  ];

  data2 = [
    {
      url : 'assets/imgs/image1.jpg',
      name : 'Image 1'
    },
    {
      url : 'assets/imgs/image2.jpg',
      name : 'Image 2'
    },
    {
      url : 'assets/imgs/image3.jpg',
      name : 'Image 3'
    },
    {
      url : 'assets/imgs/image4.jpg',
      name : 'Image 4'
    },
    {
      url : 'assets/imgs/image5.jpg',
      name : 'Image 5'
    },
  ]
  constructor() { }
}
