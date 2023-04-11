/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})
export class VideoPlayerPage implements OnInit {
  @ViewChild('videoPl', { static: false }) mVideoPlayers: ElementRef;
  haveLoaded: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.mVideoPlayers.nativeElement.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
      this.mVideoPlayers.nativeElement.poster = '';
      this.mVideoPlayers.nativeElement.play();
      this.haveLoaded = true;
    }, 2000);

  }

}
