/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { ActionSheetController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util/util.service';
@Component({
  selector: 'app-forms4',
  templateUrl: './forms4.page.html',
  styleUrls: ['./forms4.page.scss'],
})
export class Forms4Page implements OnInit {
  rate = '2';
  cap_img: any;
  constructor(
    private util: UtilService,
    private cameraCtrl: Camera,
    private actionSheetController: ActionSheetController,
  ) { }
  ngOnInit() {
  }
  onRatingChange(event) {
    console.log('event', event)
  }
  sendMessage() {
    this.util.showToast('Message sent', 'success', 'bottom');
  }

  async getImages() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose From',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            console.log('camera clicked');
            this.takePhoto();
          }
        }, {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            console.log('gallery clicked');
            this.gallery();
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }



  async gallery() {
    try {
      const options: CameraOptions = {
        quality: 100,
        targetHeight: 500,
        targetWidth: 500,
        destinationType: this.cameraCtrl.DestinationType.DATA_URL,
        encodingType: this.cameraCtrl.EncodingType.JPEG,
        mediaType: this.cameraCtrl.MediaType.PICTURE,
        sourceType: this.cameraCtrl.PictureSourceType.PHOTOLIBRARY,
        correctOrientation: true
      }
      const result = await this.cameraCtrl.getPicture(options);
      this.cap_img = `data:image/png;base64,${result}`;
    }
    catch (e) {
      console.error(e);
    }
  } // take Gallary

  async takePhoto() {
    try {
      const options: CameraOptions = {
        quality: 100,
        targetHeight: 500,
        targetWidth: 500,
        destinationType: this.cameraCtrl.DestinationType.DATA_URL,
        encodingType: this.cameraCtrl.EncodingType.PNG,
        mediaType: this.cameraCtrl.MediaType.PICTURE,
        sourceType: this.cameraCtrl.PictureSourceType.CAMERA,
        correctOrientation: true
      }
      const result = await this.cameraCtrl.getPicture(options);
      this.cap_img = `data:image/png;base64,${result}`;
    }
    catch (e) {
      console.error(e);
    }
  }
}
