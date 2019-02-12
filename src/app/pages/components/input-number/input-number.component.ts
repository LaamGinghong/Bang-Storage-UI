import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.less']
})
export class InputNumberComponent implements OnInit {
  codeBox = {
    first: {
      show: false,
      value: null as number,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-input-number-demo',
        template: \`
                     <storage-input-number
                          [(storageValue)]="value"
                     ></storage-input-number>
                  \`
      })

      export class StorageInputNumberDemoComponentClass{
          value: number;
      }
      `
    },
    second: {
      show: false,
      value: null as number,
      disabled: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-input-number-demo',
        template: \`
                     <storage-input-number
                          [(storageValue)]="value"
                          [storageDisabled]="disabled"
                     ></storage-input-number>
                     <br><br>
                     <button storage-button storageType="primary" (click)="toggleDisabled()">Toggle Disabled</button>
                  \`
      })

      export class StorageInputNumberDemoComponentClass{
        value: number;
        disabled = false;

        toggleDisabled(): void{
          this.disabled = !this.disabled;
        }
      }
      `
    },
    third: {
      value: null as number,
      show: false,
      width: 100,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-input-number-demo',
        template: \`
                     <storage-input-number
                        [(storageValue)]="value"
                        [storageWidth]="width"
                     ></storage-input-number>
                     <nz-slider
                        [nzDefaultValue]="width"
                        [(ngModel)]="width"
                        [nzMax]="1000"
                        [nzTipFormatter]="changeTooltip"
                     ></nz-slider>
                     <storage-input-number
                        [(storageValue)]="value"
                        [storageWidth]="'100%'"
                     ></storage-input-number>
                  \`

        export class StorageInputNumberDemoComponentClass{
            value: number;
            width = 100;

            changeTooltip = (e: number): string | number => {
                return e ? e + 'px' : e;
            }
        }
      })
      `
    },
    forth: {
      show: false,
      value: null as number,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-input-number-demo',
        template: \`
                      <storage-input-number
                          [(storageValue)]="value"
                          [storageMax]="100"
                          [storageMin]="0"
                      ></storage-input-number>
                      \`
      })

      export class StorageInputNumberDemoComponentClass{
        value: number;
      }
      `
    },
    fifth: {
      show: false,
      value: null as number,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-input-number-demo',
        template: \`
                      <storage-input-number
                            [(storageValue)]="value"
                            [storagePrecision]="2"
                      ></storage-input-number>
        \`
      })

      export class StorageInputNumberDemoComponentClass{
        value: number;
      }
      `
    },
    sixth: {
      show: false,
      value: null as number,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-input-number',
        template: \`
                    <storage-input-number
                        [(storageValue)]="value"
                        [storageFormatter]="{icon:'$',isBefore:true}"
                    ></storage-input-number>
                    <br><br>
                    <storage-input-number
                        [(storageValue)]="value"
                        [storageFormatter]="{icon:'%',isBefore:false}"
                    ></storage-input-number>
        \`
      })

      export class StorageInputNumberDemoComponentClass{
        value: number;
      }
      `
    }
  };
  tableData = [
    {member: '[storageValue]', description: '当前值，可双向绑定', type: 'number', default: '-'},
    {member: '[storageMax]', description: '最大值', type: 'number', default: '-'},
    {member: '[storageMin]', description: '最小值', type: 'number', default: '-'},
    {member: '[storageFormatter]', description: '指定输入框展示值的格式', type: '{ icon: string, isBefore: boolean }', default: '-'},
    {member: '[storagePrecision]', description: '数值精度', type: 'number', default: '-'},
    {member: '[storagePlaceholder]', description: '输入框默认文字', type: 'string', default: '请输入'},
    {member: '[storageDisabled]', description: '禁用', type: 'boolean', default: 'false'},
    {member: '(storageValueChange)', description: '当前输入值发生改变', type: 'EventEmitter', default: '-'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  toggleDisabled(): void {
    this.codeBox.second.disabled = !this.codeBox.second.disabled;
  }

  changeTooltip = (e: number): string | number => {
    return e ? `${e}px` : e;
  };
}
