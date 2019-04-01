import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageExportExcelService} from './storage-export-excel.service';

@NgModule({
  imports: [CommonModule],
  providers: [StorageExportExcelService]
})
export class StorageExportExcelModule {
}
