import { Component, OnInit, Input } from '@angular/core';
// import { ToastController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util/util.service'
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input('product') product: any;

  constructor(private util: UtilService) { }

  ngOnInit() { }
  buyItem() {
    this.util.showToast('Added to the Cart', 'success', 'bottom');
  }

}
