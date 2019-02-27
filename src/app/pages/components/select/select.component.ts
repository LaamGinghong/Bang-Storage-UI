import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {
  array = [
    {name: '苹果', value: 'Apple', disabled: true},
    {name: '三星', value: 'Samsung', disabled: true},
    {name: '华为', value: 'Huawei', disabled: false},
    {name: '小米', value: 'Xiaomi', disabled: false}
  ];
  value: string = null;

  constructor() {
  }

  ngOnInit() {
  }

}
