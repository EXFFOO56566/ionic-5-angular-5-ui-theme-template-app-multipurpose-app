import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signature-picker',
  templateUrl: './signature-picker.page.html',
  styleUrls: ['./signature-picker.page.scss'],
})
export class SignaturePickerPage implements OnInit {
  @ViewChild(SignaturePad, { static: false }) public signaturePad: SignaturePad;
  public signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 350,
    'canvasHeight': 200
  };
  public signatureImage: string;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    localStorage.removeItem('signature');
  }
  drawCancel() {
    console.log('cancel');
    this.modalCtrl.dismiss();
  }

  drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    localStorage.setItem('signature', this.signatureImage);
    this.modalCtrl.dismiss();

  }

  drawClear() {
    this.signaturePad.clear();
  }

}
