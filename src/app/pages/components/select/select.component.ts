import {Component, OnInit} from '@angular/core';
// import {StorageSelectSize} from 'bang-storage-ui';
import {StorageSelectSize} from '../../../../../projects/bang-storage-ui/src/lib/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {
  array = [
    {name: '苹果', value: 'Apple', disabled: false},
    {name: '三星', value: 'Samsung', disabled: false},
    {name: '华为', value: 'Huawei', disabled: false},
    {name: '小米', value: 'Xiaomi', disabled: false},
    {name: 'OPPO', value: 'OPPO', disabled: true},
    {name: 'vivo', value: 'vivo', disabled: true},
    {name: '一加', value: 'onePlus', disabled: false},
    {name: 'IQOO', value: 'IQOO', disabled: false},
    {name: '荣耀', value: 'honor', disabled: false},
    {name: '魅族', value: 'meizu', disabled: false}
  ];
  codeBox = {
    first: {
      show: false,
      source: `
      import {Component} from '@angular/core';

      @Component({
        selector: 'storage-select-demo',
        template: \`
                   <storage-select>
                      <storage-option *ngFor="let item of array" [storageValue]="item.value" [storageName]="item.name" [storageDisabled]="item.disabled"></storage-option>
                   </storage-select>
                   <storage-select storageDisabled>
                      <storage-option *ngFor="let item of array" [storageValue]="item.value" [storageName]="item.name"></storage-option>
                   </storage-select>
                   <storage-select storageAllowClear>
                      <storage-option *ngFor="let item of array" [storageValue]="item.value" [storageName]="item.name" [storageDisabled]="item.disabled"></storage-option>
                   </storage-select>
                   \`
      })
      export class StorageSelectDemoComponent{
        array = [
          {name: '苹果', value: 'Apple', disabled: false},
          {name: '三星', value: 'Samsung', disabled: false},
          {name: '华为', value: 'Huawei', disabled: false},
          {name: '小米', value: 'Xiaomi', disabled: false},
          {name: 'OPPO', value: 'OPPO', disabled: true},
          {name: 'vivo', value: 'vivo', disabled: true},
          {name: '一加', value: 'onePlus', disabled: false},
          {name: 'IQOO', value: 'IQOO', disabled: false},
          {name: '荣耀', value: 'honor', disabled: false},
          {name: '魅族', value: 'meizu', disabled: false}
        ];
      }
      `
    },
    second: {
      show: false,
      source: `
      import {Component} from '@angular/core';

      @Component({
        selector: 'storage-select-demo',
        template: \`
                    <storage-select storageMultiple>
                      <storage-option *ngFor="let item of array" [storageValue]="item.value" [storageName]="item.name" [storageDisabled]="item.disabled"></storage-option>
                    </storage-select>
                    <storage-select storageMultiple storageShowSelectAll>
                      <storage-option *ngFor="let item of array" [storageValue]="item.value" [storageName]="item.name" [storageDisabled]="item.disabled"></storage-option>
                    </storage-select>
                  \`
      })
      export class StorageSelectDemoComponent{
        array = [
          {name: '苹果', value: 'Apple', disabled: false},
          {name: '三星', value: 'Samsung', disabled: false},
          {name: '华为', value: 'Huawei', disabled: false},
          {name: '小米', value: 'Xiaomi', disabled: false},
          {name: 'OPPO', value: 'OPPO', disabled: true},
          {name: 'vivo', value: 'vivo', disabled: true},
          {name: '一加', value: 'onePlus', disabled: false},
          {name: 'IQOO', value: 'IQOO', disabled: false},
          {name: '荣耀', value: 'honor', disabled: false},
          {name: '魅族', value: 'meizu', disabled: false}
        ];
      }
      `
    },
    third: {
      show: false,
      source: `
      import {Component} from '@angular/core';
      import {StorageSelectSize} from 'bang-storage-ui';

      @Component({
        selector: 'storage-select-demo',
        template: \`
                    <nz-radio-group [(ngModel)]="size">
                      <label nz-radio-button nzValue="large">Large</label>
                      <label nz-radio-button nzValue="default">Default</label>
                      <label nz-radio-button nzValue="small">Small</label>
                    </nz-radio-group>
                    <br><br>
                    <storage-select [storageSize]="size">
                      <storage-option *ngFor="let item of array" [storageValue]="item.value"
                                      [storageName]="item.name"></storage-option>
                    </storage-select>
                    <br><br>
                    <storage-select storageMultiple [storageSize]="size">
                      <storage-option *ngFor="let item of array" [storageValue]="item.value"
                                      [storageName]="item.name"></storage-option>
                    </storage-select>
                  \`
      })
      export class StorageSelectDemoComponent{
        array = [
          {name: '苹果', value: 'Apple', disabled: false},
          {name: '三星', value: 'Samsung', disabled: false},
          {name: '华为', value: 'Huawei', disabled: false},
          {name: '小米', value: 'Xiaomi', disabled: false},
          {name: 'OPPO', value: 'OPPO', disabled: true},
          {name: 'vivo', value: 'vivo', disabled: true},
          {name: '一加', value: 'onePlus', disabled: false},
          {name: 'IQOO', value: 'IQOO', disabled: false},
          {name: '荣耀', value: 'honor', disabled: false},
          {name: '魅族', value: 'meizu', disabled: false}
        ];
        size: StorageSelectSize = 'default';
      }
      `
    },
    forth: {
      show: false,
      source: `
      import {Component} from '@angular/core';

      @Component({
        selector: 'storage-select-demo',
        template: \`
                   <storage-select (storageScrollToBottom)="scrollToBottom()">
                      <storage-option *ngFor="let item of array" [storageName]="item.name"
                                      [storageValue]="item.value"></storage-option>
                   </storage-select>
                   \`
      })
      export class StorageSelectDemoComponent{
        array = [
          {name: '苹果', value: 'Apple', disabled: false},
          {name: '三星', value: 'Samsung', disabled: false},
          {name: '华为', value: 'Huawei', disabled: false},
          {name: '小米', value: 'Xiaomi', disabled: false},
          {name: 'OPPO', value: 'OPPO', disabled: true},
          {name: 'vivo', value: 'vivo', disabled: true},
          {name: '一加', value: 'onePlus', disabled: false},
          {name: 'IQOO', value: 'IQOO', disabled: false},
          {name: '荣耀', value: 'honor', disabled: false},
          {name: '魅族', value: 'meizu', disabled: false}
        ];

        scrollToBottom(): void {
          const value = String(Math.random() * 10);
          this.array.push(
            {name: 'New Item' + value, value, disabled: false}
          );
        }
      }
      `
    }
  };
  size: StorageSelectSize = 'default';
  selectData = [
    {name: '[(storageValue)]', description: '当前选中的 storage-option 的 storageValue 值，可双向绑定,多选时为数组', type: 'any|any[]', default: '-'},
    {name: '[storagePlaceholder]', description: '选择框默认文字', type: 'string', default: '-'},
    {name: '[storageWidth]', description: '选择框默认宽度，单位：px', type: 'number', default: '180'},
    {name: '[storageSize]', description: '选择框默认大小', type: 'StorageSelectSize:large|default|small', default: 'default'},
    {name: '[storageNotFoundContent]', description: '当下拉列表为空时显示的内容', type: 'string', default: '没有数据'},
    {name: '[storageAllowClear]', description: '支持清除，单选有效', type: 'boolean', default: 'false'},
    {name: '[storageDisabled]', description: '是否禁用', type: 'boolean', default: 'false'},
    {name: '[(storageOpen)]', description: '下拉菜单是否打开，可双向绑定', type: 'boolean', default: 'false'},
    {name: '[storageMultiple]', description: '是否开启多选', type: 'boolean', default: 'false'},
    {name: '[storageShowSelectAll]', description: '是否开启全选，多选有效', type: 'boolean', default: 'false'},
    {name: '(storageValueChange)', description: 'storage-select 选中的值发生改变时的回调', type: 'EventEmitter<any>', default: '-'},
    {name: '(storageOpenChange)', description: '下拉菜单打开状态变化回调', type: 'EventEmitter<any>', default: '-'},
    {name: '(storageScrollToBottom)', description: '下拉列表滚动到底部的回调', type: 'EventEmitter<void>', default: '-'}
  ];
  optionData = [
    {name: '[storageValue]', description: 'storage-select 中 storageValue 的值', type: 'any', default: '-'},
    {name: '[storageName]', description: '选中该 storage-option 后，storage-select 中显示的文字', type: 'string', default: '-'},
    {name: '[storageDisabled]', description: '是否禁用', type: 'boolean', default: 'false'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  scrollToBottom(): void {
    const value = String(Math.random() * 10);
    this.array.push(
      {name: `New Item${value}`, value, disabled: false}
    );
  }
}
