import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'storage-zoom',
  template: `
    <div class="background">
      <div class="content">
        <img [src]="path" alt="放大图片" (click)="zoomOut.emit()">
      </div>
    </div>
  `,
  styles: [`
    .background {
      width: 100%;
      height: 100%;
      position: fixed;
      background: rgba(0, 0, 0, .45) !important;
      top: 0;
      left: 0;
    }

    .content {
      max-width: 60%;
      margin: 100px auto 0;
      cursor: zoom-out;
    }

    .content > img {
      width: 100%;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class StorageZoomComponent {
  @Input() path: string;
  @Output() zoomOut = new EventEmitter<boolean>();

  constructor() {
  }
}
