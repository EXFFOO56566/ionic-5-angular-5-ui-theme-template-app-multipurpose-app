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
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.page.html',
  styleUrls: ['./user-avatar.page.scss'],
})
export class UserAvatarPage implements OnInit {

  public users: any[] = [
    { name: 'Abc', company: 'Siemens', job_title: 'Technical Lead', color: '#ccc' },
    { name: 'Jonh', company: 'NBS', job_title: 'BI Engineer' },
    { name: 'Test', company: 'Siemens', job_title: 'Technical Lead' },
    { name: 'Xyz', company: 'Siemens', job_title: 'Software Engineer' },
    { name: 'Mno', company: 'Siemens', job_title: 'Software Engineer' },
    { name: 'User', company: 'Siemens', job_title: 'Sr. Technical Lead' },
    ];

  constructor() { }

  ngOnInit() {
  }

}
