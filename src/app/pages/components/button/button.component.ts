import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  preserveWhitespaces: false
})
export class ButtonComponent implements OnInit {
  codeBox = {
    first: {
      show: false,
      source: `
  import { Component } from '@angular/core';

  @Component({
   selector: 'storage-button-demo',
    template: \`
                <button storage-button>Default</button>
                <button storage-button storageType="primary">Primary</button>
                <button storage-button storageType="danger">Danger</button>
                <button storage-button storageType="warning">Warning</button>
                <button storage-button storageType="success">Success</button>
                <button storage-button storageType="info">Info</button>
              \`
  })

  export class StorageButtonDemoComponentClass{
  }
  `
    },
    second: {
      show: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-button-demo',
        template: \`
                        <nz-radio-group [(ngModel)]="size">
                          <label nz-radio-button nzValue="large">Large</label>
                          <label nz-radio-button nzValue="default">Default</label>
                          <label nz-radio-button nzValue="small">Small</label>
                        </nz-radio-group>
                        <br>
                        <br>
                        <button storage-button storageType="default" [storageSize]="size">Default</button>
                        <button storage-button storageType="primary" [storageSize]="size">Primary</button>
                        <button storage-button storageType="danger" [storageSize]="size">Danger</button>
                        <button storage-button storageType="warning" [storageSize]="size">Warning</button>
                        <button storage-button storageType="success" [storageSize]="size">Success</button>
                        <button storage-button storageType="info" [storageSize]="size">Info</button>
               \`
      })

      export class storageButtonDemoComponentClass{
      }
      `
    },
    third: {
      show: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector:'storage-button-demo',
        template:\`
                        <button storage-button storageType="primary">Primary</button>
                        <button storage-button storageType="primary" disabled>Primary(disabled)</button>
                        <br><br>
                        <button storage-button>Default</button>
                        <button storage-button disabled>Default(disabled)</button>
                        <br><br>
                        <button storage-button storageType="danger">Danger</button>
                        <button storage-button storageType="danger" disabled>Danger(disabled)</button>
                        <br><br>
                        <button storage-button storageType="warning">Warning</button>
                        <button storage-button storageType="warning" disabled>Warning(disabled)</button>
                        <br><br>
                        <button storage-button storageType="success">Success</button>
                        <button storage-button storageType="success" disabled>Success(disabled)</button>
                        <br><br>
                        <button storage-button storageType="info">Info</button>
                        <button storage-button storageType="info" disabled>Info(disabled)</button>
        \`

        export class StorageButtonDemoComponentClass{
        }
        `
    },
    forth: {
      show: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector:'storage-button-demo',
        template:\`
                        <button storage-button storageType="primary" [storageLoading]="true">Loading!</button>
                        <button storage-button storageType="primary" [storageLoading]="loading" (click)="load()">Click Me!</button>
                        <br><br>
                        <button storage-button [storageLoading]="true">Loading!</button>
                        <button storage-button [storageLoading]="loading" (click)="load()">Click Me!</button>
                        <br><br>
                        <button storage-button storageType="danger" [storageLoading]="true">Loading!</button>
                        <button storage-button storageType="danger" [storageLoading]="loading" (click)="load()">Click Me!</button>
                        <br><br>
                        <button storage-button storageType="warning" [storageLoading]="true">Loading!</button>
                        <button storage-button storageType="warning" [storageLoading]="loading" (click)="load()">Click Me!</button>
                        <br><br>
                        <button storage-button storageType="success" [storageLoading]="true">Loading!</button>
                        <button storage-button storageType="success" [storageLoading]="loading" (click)="load()">Click Me!</button>
                        <br><br>
                        <button storage-button storageType="info" [storageLoading]="true">Loading!</button>
                        <button storage-button storageType="info" [storageLoading]="loading" (click)="load()">Click Me!</button>
        \`

        export class StorageButtonDemoComponentClass{
        }
      `
    },
    fifth: {
      show: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector:'storage-button-demo',
        template:\`
           <div  style="background: rgb(190, 200, 200);padding: 30px">
               <button storage-button storageType="primary" [storageLoading]="true" [storageGhost]="true">Loading!</button>
               <button storage-button storageType="primary" [storageLoading]="loading" [storageGhost]="true" (click)="load()">Click Me!</button>
               <br><br>
               <button storage-button [storageLoading]="true" [storageGhost]="true">Loading!</button>
               <button storage-button [storageLoading]="loading" [storageGhost]="true" (click)="load()">Click Me!</button>
               <br><br>
               <button storage-button storageType="danger" [storageLoading]="true" [storageGhost]="true">Loading!</button>
               <button storage-button storageType="danger" [storageLoading]="loading" [storageGhost]="true" (click)="load()">Click Me!</button>
               <br><br>
               <button storage-button storageType="warning" [storageLoading]="true" [storageGhost]="true">Loading!</button>
               <button storage-button storageType="warning" [storageLoading]="loading" [storageGhost]="true" (click)="load()">Click Me!</button>
               <br><br>
               <button storage-button storageType="success" [storageLoading]="true" [storageGhost]="true">Loading!</button>
               <button storage-button storageType="success" [storageLoading]="loading" [storageGhost]="true" (click)="load()">Click Me!</button>
               <br><br>
               <button storage-button storageType="info" [storageLoading]="true" [storageGhost]="true">Loading!</button>
               <button storage-button storageType="info" [storageLoading]="loading" [storageGhost]="true" (click)="load()">Click Me!</button>
            </div>
        \`

        export class StorageButtonDemoComponentClass{
        }
      `
    }
  };
  size = 'default';
  loading = false;
  tableData = [
    {name: '[storageGhost]', description: '幽灵属性，使按钮背景透明', type: 'boolean', default: 'false'},
    {name: '[storageType]', description: '设置按钮类型，可选值为<code class="code">primary</code><code class="code">default</code><code class="code">danger</code><code class="code">warning</code><code class="code">success</code><code class="code">info</code>或者不填', type: 'string', default: '-'},
    {name: '[storageSize]', description: '设置按钮大小，可选值为<code class="code">large</code><code class="code">small</code>或者不填', type: 'string', default: '-'},
    {name: '[storageLoading]', description: '设置按钮载入状态', type: 'boolean', default: 'false'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  load(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
