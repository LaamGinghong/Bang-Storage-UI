import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.less']
})
export class ZoomComponent implements OnInit {
  codeBox = {
    first: {
      show: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
         selector: 'storage-zoom-demo',
         template: \`
                     <img
                        storage-zoom
                        storagePath="assets/img/kaisa.png"
                        src="assets/img/kaisa.png"
                        alt="卡莎" width="240">
                   \`
      })

      export class StorageZoomDemoComponent{
      }
      `
    }
  };
  tableData = [{
    name: '[storagePath]',
    description: '图片地址',
    type: 'string',
    default: '-'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
