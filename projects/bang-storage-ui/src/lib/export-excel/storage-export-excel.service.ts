import {Injectable} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import ExportJsonExcel from 'js-export-excel';


@Injectable()
export class StorageExportExcelService {

  constructor(
    private _message: NzMessageService
  ) {
  }

  exportExcel(option: StorageExportExcelTableOption): void {
    const {data, header, name = '表格'} = option;
    if (!data.length) {
      this._message.error('请选择要导出的数据！');
      return;
    }
    const sheetData = [];
    data.forEach(item => {
      const value = [];
      for (const i in item) {
        if (item.hasOwnProperty(i)) {
          value.push(item[i]);
        }
      }
      sheetData.push(value);
    });
    const datas = [{sheetData, sheetHeader: header}];
    const toExcel = new ExportJsonExcel({datas, fileName: name});
    toExcel.saveExcel();
  }
}

export interface StorageExportExcelTableOption {
  data: any[];
  header: string[];
  name?: string;
}
