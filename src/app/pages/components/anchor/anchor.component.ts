import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.less']
})
export class AnchorComponent implements OnInit {
  codeBox = {
    first: {
      show: false,
      source: `
      import {Component} from '@angular/core';

      @Component({
        selector: 'storage-anchor-demo',
        template: \`
                  <storage-anchor>
                    <storage-link storageHref="#use" storageTitle="何时使用"></storage-link>
                    <storage-link storageHref="#example" storageTitle="代码演示"></storage-link>
                    <storage-link storageHref="#api" storageTitle="API"></storage-link>
                  </storage-anchor>
                  \`
      })
      export class StorageAnchorDemoComponent {
      }
      `
    }
  };
  tableData = [
    {name: '[storageHref]', description: '锚点链接', type: 'string', default: '-'},
    {name: '[storageTitle]', description: '文字内容', type: 'string', default: '-'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
