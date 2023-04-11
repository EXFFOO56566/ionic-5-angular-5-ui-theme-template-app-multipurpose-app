
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
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { AngularFireUploadTask, AngularFireStorageReference, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-fire-image-create',
  templateUrl: './fire-image-create.page.html',
  styleUrls: ['./fire-image-create.page.scss'],
})
export class FireImageCreatePage implements OnInit {
  isCreate: boolean;
  title: any;
  description: any;
  image: any;
  task: AngularFireUploadTask;
  ref: AngularFireStorageReference;
  uploadState: Observable<string>;
  downloadURL: Observable<string>;
  uploadProgress: Observable<number>;
  url: any;
  uploading: boolean;
  constructor(
    private util: UtilService,
    private adb: AngularFirestore,
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    private cameraCtrl: Camera,
    private afStorage: AngularFireStorage,
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
      let id = this.makeid(10);
      this.adb.collection('fireimage').doc(localStorage.getItem('fuid')).collection('list').doc(id).set({
        id: id,
        title: this.title,
        description: this.description,
        image: this.url,
        timestamp: new Date().toISOString(),
      }).then(() => {
        console.log('added');
        this.isCreate = false;
        this.navCtrl.back();
        this.util.showToast('List Added', 'success', 'bottom');
      }).catch((error: any) => {
        console.log('error', error);
        this.isCreate = false;
        this.util.showErrorAlert("Something went Wrong");
      })
    }
  }
  makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
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
    const id = this.makeid(30);
    this.uploading = true;
    this.ref = this.afStorage.ref(`images/${id}`)
    this.task = this.ref.putString(this.image, 'data_url')
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    console.log('upload progress', this.uploadProgress);
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        this.downloadURL.subscribe(url => {
          console.log('download uril', url);
          this.url = url;
          this.uploading = false;
        });
      })
    )
      .subscribe();
  }

}
