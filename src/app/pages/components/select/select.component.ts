import {Component, OnInit} from '@angular/core';

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
    {name: 'OPPO', value: 'OPPO', disabled: false},
    {name: 'vivo', value: 'vivo', disabled: false},
    {name: '一加', value: 'onePlus', disabled: false},
    {name: 'IQOO', value: 'IQOO', disabled: false},
    {name: '荣耀', value: 'honor', disabled: false},
    {name: '魅族', value: 'meizu', disabled: false}
  ];
  value: string = null;

  constructor() {
  }

  ngOnInit() {
  }

}
