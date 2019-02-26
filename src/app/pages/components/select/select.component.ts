import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {
  array = [
    {name: '苹果', value: 'Apple'},
    {name: '三星', value: 'Samsung'},
    {name: '华为', value: 'Huawei'},
    {name: '小米', value: 'Xiaomi'}
  ];
  value: string = null;

  constructor() {
  }

  ngOnInit() {
  }

}
