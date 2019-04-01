import {Component, OnInit} from '@angular/core';
import {StorageExportExcelService} from '../../../../../projects/bang-storage-ui/src/lib/export-excel';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {
  tableData = [
    {name: 'Uzi', position: 'Bot'},
    {name: 'Rookie', position: 'Mid'},
    {name: 'TheShy', position: 'Top'},
    {name: 'Karsa', position: 'Jug'},
    {name: 'Ming', position: 'Sup'}
  ];

  constructor(
    private _export: StorageExportExcelService
  ) {
  }

  ngOnInit(): void {
  }

  export(): void {
    const header = ['ID', '位置'];
    this._export.exportExcel({data: this.tableData, header: ['ID', '位置'], name: '选手表'});
  }
}
