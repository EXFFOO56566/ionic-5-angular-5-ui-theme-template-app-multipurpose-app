/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { HidenavStretchheaderComponent } from 'src/app/directives/hidenav-stretchheader.component';

@Component({
  selector: 'app-parallax5',
  templateUrl: './parallax5.page.html',
  styleUrls: ['./parallax5.page.scss'],
})
export class Parallax5Page implements OnInit {

  @ViewChild(IonContent, {static : false}) content: IonContent;
  @ViewChild('title', { read: ElementRef, static : false }) title: ElementRef;
  @ViewChild(HidenavStretchheaderComponent , {static : false}) hidenav: HidenavStretchheaderComponent;
  constructor(private navCtrl: NavController) { }



  ngOnInit() {
    setTimeout(() => {
      console.log(this.hidenav);
      this.hidenav.scroll.subscribe(res => {
        this.title.nativeElement.style.transform = 'translate3d(0, ' + (res - 50) + 'px, 0)';
      });
    }, 2000);
  }

  expand() {
    this.hidenav.toggle(300);
  }

  goBack() {
    this.navCtrl.back();
  }

}
