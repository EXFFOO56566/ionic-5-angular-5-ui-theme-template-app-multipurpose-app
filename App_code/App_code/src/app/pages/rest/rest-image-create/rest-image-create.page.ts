
/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';

import { UtilService } from 'src/app/services/util/util.service';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { RestAPIsService } from 'src/app/services/rest/rest-apis.service';

@Component({
  selector: 'app-rest-image-create',
  templateUrl: './rest-image-create.page.html',
  styleUrls: ['./rest-image-create.page.scss'],
})
export class RestImageCreatePage implements OnInit {
  isCreate: boolean;
  title: any;
  description: any;
  image: any;
  url: any;
  uploading: boolean;
  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    private cameraCtrl: Camera,
    private api: RestAPIsService
  ) {
    this.title = '';
    this.description = '';
    this.image = '';
    this.url = '';
  }

  ngOnInit() {
    this.isCreate = false;
    this.uploading = false;
  }
  addList() {
    if (this.title == '') {
      this.util.showWarningAlert('Please Add Title');
      return false;
    }
    if (this.description == '') {
      this.util.showWarningAlert('Please add Description');
      return false;
    }
    if (this.image == '') {
      this.util.showWarningAlert('Please Add Image');
      return false;
    }
    if (this.url != '' && !this.uploading) {
      this.isCreate = true;
      const param = {
        user_id: localStorage.getItem('uid'),
        title: this.title,
        description: this.description,
        img: this.url
      };
      this.util.show();
      this.api.post(param, 'ImagesCRUD/save').then((data) => {
        this.util.hide();
        const info = JSON.parse(data.data);
        console.log(info);
        this.navCtrl.back();
      }).catch(error => {
        this.util.hide();
        console.log(error);
        this.util.showToast('Something went wrong while uploading image', 'danger', 'bottom');
      });
    }
  }



  async addImage() {
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
      this.image = `data:image/png;base64,${result}`;
      this.uploadimage();
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
      this.image = `data:image/png;base64,${result}`;
      this.uploadimage();
    }
    catch (e) {
      console.error(e);
    }
  }

  uploadimage() {
    const param = {
      img: this.image,
      type: 'png'
    };
    this.util.show();
    this.api.post(param, 'ImagesCRUD/upload_file').then((data) => {
      this.util.hide();
      const info = JSON.parse(data.data);
      console.log(info);
      this.url = info.data;
    }).catch(error => {
      this.util.hide();
      console.log(error);
      this.util.showToast('Something went wrong while uploading image', 'danger', 'bottom');
    });
  }

}
