import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  tableSource = [
    {name: '姓名', value: 'name'},
    {name: '年龄', value: 'age'},
    {name: '性别', value: 'sex'},
    {name: '出生地', value: 'birthPlace'}
  ];
  tableData = [
    {name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州'},
    {name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州'},
    {name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
