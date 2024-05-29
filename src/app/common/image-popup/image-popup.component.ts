import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss']
})
export class ImagePopupComponent implements OnInit {


  @ViewChild('popupImageEl')
  popupImageEl: ElementRef;

  @Input()
  imagePath: string;

  @Input()
  captionStr = "";

  @Input()
  isShowDelete: boolean = false;

  @Output()
  clickDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.imagePath);
  }

  showPopup() {
    this.popupImageEl.nativeElement.style.display = 'flex';
  }

  closePopup() {
    this.popupImageEl.nativeElement.style.display = 'none';
  }
  onSpanClick(event: MouseEvent) {
    event.stopPropagation();
  }

  sendDelete() {
    this.clickDelete.emit(1);
  }
}
