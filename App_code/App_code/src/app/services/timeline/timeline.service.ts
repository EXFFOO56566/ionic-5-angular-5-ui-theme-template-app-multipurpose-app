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
export class TimelineService {

  // powderblue

  tasks = [
    {
      s_time : '07:00 AM',
      e_time : '10:00 AM',
      title : 'Bug Fixes #Bt456',
      cat : 'Major Task',
      color: 'aliceblue',
      user : 'assets/imgs/user1.jpg'
    },
    {
      s_time : '09:00 AM',
      e_time : '11:00 AM',
      title : 'Additional #Cf456',
      cat : 'Major Task',
      color: 'antiquewhite',
      user : 'assets/imgs/user2.jpg'
    },
    {
      s_time : '12:00 PM',
      e_time : '03:00 PM',
      title : 'Remove Bugs #Bt456',
      cat : 'Major Task',
      color: 'beige',
      user : 'assets/imgs/user1.jpg'
    },
    {
      s_time : '04:00 PM',
      e_time : '07:00 AM',
      title : 'Add Feature #Fj456',
      cat : 'Major Task',
      color: 'ghostwhite',
      user : 'assets/imgs/user2.jpg'
    }
  ];
  constructor() { }
}
