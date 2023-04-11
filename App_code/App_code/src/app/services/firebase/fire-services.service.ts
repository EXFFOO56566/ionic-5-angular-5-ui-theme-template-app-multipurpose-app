/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

export class AuthInfo {
  constructor(public $uid: string) { }

  isLoggedIn() {
    return !!this.$uid;
  }
}
@Injectable({
  providedIn: 'root'
})
export class FireServicesService {
  static UNKNOWN_USER = new AuthInfo(null);
  db = firebase.firestore();
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(FireServicesService.UNKNOWN_USER);
  constructor(
    private fireAuth: AngularFireAuth,
    private adb: AngularFirestore,
  ) { }

  public checkAuth() {
    return new Promise((resolve) => {
      this.fireAuth.auth.onAuthStateChanged(user => {
        resolve(user);
      });
    });
  }
  public login(email: string, password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            this.authInfo$.next(new AuthInfo(res.user.uid));
            resolve(res.user);
          }
        })
        .catch(err => {

          this.authInfo$.next(FireServicesService.UNKNOWN_USER);
          reject(`login failed ${err}`);
        });
    });
  }

  public register(mail: string, password: string, name: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.createUserWithEmailAndPassword(mail, password)
        .then(res => {
          if (res.user) {

            this.db.collection('users').doc(res.user.uid).set({
              uid: res.user.uid,
              email: mail,
              fullname: name,
            });
            this.authInfo$.next(new AuthInfo(res.user.uid));
            resolve(res.user);
          }
        })
        .catch(err => {

          this.authInfo$.next(FireServicesService.UNKNOWN_USER);
          reject(`login failed ${err}`)
        });
    });
  }


  public resetPassword(email: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.sendPasswordResetEmail(email)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(`reset failed ${err}`);
        });
    });
  }

  public getList(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('list').doc(id).get().subscribe((data) => {
        resolve(data.data());
      }, error => {
        reject(error);
      });
    });
  }
}
