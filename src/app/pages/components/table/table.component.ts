import {Component, OnInit} from '@angular/core';
import {StorageTableSource} from '../../../../../projects/bang-storage-ui/src/lib/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  tableSource: Array<StorageTableSource> = [
    {title: '名称', value: 'name'},
    {title: '类型', value: 'type'},
    {title: '描述', value: 'description'},
    {title: '默认值', value: 'default'},
    {title: '年龄', value: 'age'},
    {title: '性别', value: 'sex'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
