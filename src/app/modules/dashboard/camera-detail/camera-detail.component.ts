import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare var videojs: any;
@Component({
  selector: 'app-camera-detail',
  templateUrl: './camera-detail.component.html',
  styleUrls: ['./camera-detail.component.scss']
})
export class CameraDetailComponent implements OnInit {
  activeModal = inject(NgbActiveModal);
  @ViewChild('target', { static: true }) target: ElementRef;

  ngOnInit(): void {
    let videoUrl = "https://customer-h1quqaa21rcp9xcr.cloudflarestream.com/3ecc2d75aa9d2be38113d8da43fcdbe1/manifest/video.m3u8";
     videojs(this.target.nativeElement, { autoplay: true, controls: true, sources: [{ src: videoUrl }] }, function onPlayerReady() {

    });
  }
}
