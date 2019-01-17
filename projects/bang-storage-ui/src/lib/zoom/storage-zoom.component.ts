import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'storage-zoom',
  template: `
    <nz-layout>
      <nz-content>
        <img [src]="path" alt="放大图片" (click)="zoomOut.emit()">
      </nz-content>
    </nz-layout>
  `,
  styles: [`
    nz-layout {
      width: 100%;
      height: 100%;
      position: fixed;
      background: rgba(0, 0, 0, .45) !important;
      top: 0;
      left: 0;
    }

    nz-content {
      max-width: 60%;
      margin: 100px auto 0;
      cursor: zoom-out;
    }

    nz-content > img {
      width: 100%;
    }
  `],
  preserveWhitespaces: false
})
export class StorageZoomComponent {
  @Input() path: string;
  @Output() zoomOut = new EventEmitter<boolean>();

  constructor() {
  }
}
