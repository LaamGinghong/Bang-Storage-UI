import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.less']
})
export class BackTopComponent implements OnInit {
  codeBox = {
    first: {
      show: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-back-top-demo',
        template: \`
                    <storage-back-top></storage-back-top>
                    Scroll down to see the button on your right bottom.
                  \`
      })

      export class StorageBackTopComponent{
      }
      `
    },
    second: {
      show: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-back-top-demo',
        template: \`
                  <p>Scroll down top see the custom button on your right bottom.</p>
                  <storage-back-top [storageTemplate]="iconElement">
                    <ng-template #iconElement>
                      <div id="iconElement">UP</div>
                    </ng-template>
                  </storage-back-top>
                 \`,
        styles: [\`
                 #iconElement {
                    background: #1b6d85;
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    line-height: 80px;
                    text-align: center;
                 }
                \`]
      })

      export class StorageBackTopDemoComponent{
      }
      `
    },
    third: {
      show: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-back-top-demo',
        template: \`
                   <div id="container" #containerElement>
                      Scroll down to see the button on your right bottom.
                      <div id="content">
                          <storage-back-top [storageContainer]="containerElement"></storage-back-top>
                      </div>
                   </div>
                  \`,
        styles: [\`
                   #container {
                      height: 200px;
                      overflow-y: auto;
                   }
                   #content {
                      height: 1000px;
                      background: pink;
                   }
        \`]
      })

      export class StorageBackTopComponent{
      }
      `
    },
    forth: {
      show: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-back-top-demo',
        template: \`
                   <div id="container" #containerElement>
                      Scroll down to see the button on your right bottom.
                      <div id="content">
                          <storage-back-top [storageContainer]="containerElement" [storageTarget]="300"></storage-back-top>
                      </div>
                   </div>
                  \`,
        styles: [\`
                   #container {
                      height: 200px;
                      overflow-y: auto;
                   }
                   #content {
                      height: 1000px;
                      background: pink;
                   }
        \`]
      })

      export class StorageBackTopComponent{
      }
      `
    },
    fifth: {
      show: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-back-top-demo',
        template: \`
                   <div id="container" #containerElement>
                      Scroll down to see the button on your right bottom.
                      <div id="content">
                          <storage-back-top
                                          [storageContainer]="containerElement"
                                          [storagePosition]="{left:'1000px',bottom:'150px'}"
                                          ></storage-back-top>
                      </div>
                   </div>
                  \`,
        styles: [\`
                   #container {
                      height: 200px;
                      overflow-y: auto;
                   }
                   #content {
                      height: 1000px;
                      background: pink;
                   }
        \`]
      })

      export class StorageBackTopComponent{
      }
      `
    }
  };
  tableData = [
    {name: '[storageTemplate]', description: '自定义内容，见示例', type: 'TemplateRef<void>', default: '-'},
    {name: '[storageContainer]', description: '设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数', type: 'string|Element', default: 'window'},
    {name: '[storageTarget]', description: '设置滚动距离顶部距离', type: 'number', default: 0},
    {name: '[storageVisibilityHeight]', description: '滚动高度达到此参数值才出现按钮', type: 'number', default: 400},
    {name: '[storagePosition', description: '按钮出现位置', type: '{ left?: string, right?: string, top?: string, bottom?: string }', default: '-'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
