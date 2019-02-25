import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  array = [1, 2, 3, 4];
  codeBox = {
    first: {
      show: false,
      source: `
      import {Component} from '@angular/core';

      @Component({
        selector: 'storage-carousel-demo',
        template: \`
                    <storage-carousel storageDirection>
                       <div *ngFor="let item of array" storage-carousel-content>
                          <h3>{{item}}</h3>
                       </div>
                    </storage-carousel>
      })
      export class StorageCarouseDemoComponent {
        array = [1, 2, 3, 4];
      }
      `
    },
    second: {
      show: false,
      source: `
      import {Component} from '@angular/core';

      @Component({
        selector: 'storage-carousel-demo',
        template: \`
                    <storage-carousel storageDirection storageLight>
                       <div *ngFor="let item of array" storage-carousel-content>
                          <h3>{{item}}</h3>
                       </div>
                    </storage-carousel>
                    \`
      })
      export class StorageCarouseDemoComponent {
        array = [1, 2, 3, 4];
      }
      `
    },
    third: {
      show: false,
      source: `
      import {Component} from '@angular/core';
      import {StorageCarouselSize} from 'bang-storage-ui';

      @Component({
        selector: 'storage-carousel-demo',
        template: \`
                    <storage-carousel [storageSize]="size">
                       <div *ngFor="let item of array" storage-carousel-content>
                          <h3>{{item}}</h3>
                       </div>
                    </storage-carousel>
                    \`
      })
      export class StorageCarouseDemoComponent {
        array = [1, 2, 3, 4];
        size: StorageCarouselSize = {
          width: '500px',
          height: '200px'
        }
      }
      `
    },
    forth: {
      show: false,
      source: `
      import {Component} from '@angular/core';

      @Component({
        selector: 'storage-carousel-demo',
        template: \`
                    <storage-carousel storageAutoRun>
                       <div *ngFor="let item of array" storage-carousel-content>
                          <h3>{{item}}</h3>
                       </div>
                    </storage-carousel>
                    \`
      })
      export class StorageCarouseDemoComponent {
        array = [1, 2, 3, 4];
      }
      `
    }
  };
  tableData = [
    {name: '[storageSize]', description: '自定义轮播图大小,单位：px', type: '{width?:string,height?:string}', default: `{width:'720px',height:'220px'}`},
    {name: '[storageDots]', description: '是否显示页码按钮', type: 'boolean', default: 'true'},
    {name: '[storageDirection]', description: '是否显示上一张、下一张按钮', type: 'boolean', default: 'false'},
    {name: '[storageAutoRun]', description: '是否自动轮播', type: 'boolean', default: 'false'},
    {name: '[storageAutoRunSpeed]', description: '切换时间(毫秒)', type: 'number', default: '3000'},
    {name: '[storageLight]', description: '是否切换为亮色主题', type: 'boolean', default: 'false'},
    {name: '(storageClickIndex)', description: '点击页码按钮回调函数', type: 'EventEmitter<number>', default: '-'},
    {name: '(storageClickDirection)', description: '点击切换页按钮回调函数', type: `EventEmitter<'pre'|'next'>`, default: '-'}
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
