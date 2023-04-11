/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FireServicesService } from 'src/app/services/firebase/fire-services.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private fireService: FireServicesService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): any {
        return this.fireService.checkAuth().then(user => {
            if (user) {
                return true;
            } else {
                this.router.navigate(['fireLogin']);
            }
        });
    }
}
