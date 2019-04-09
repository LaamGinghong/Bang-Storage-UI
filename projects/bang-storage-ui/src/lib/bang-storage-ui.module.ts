import {ModuleWithProviders, NgModule} from '@angular/core';
import {StorageButtonModule} from './button/storage-button.module';
import {StorageInputNumberModule} from './input-number/storage-input-number.module';
import {StorageModalModule} from './modal/storage-modal.module';
import {StorageZoomModule} from './zoom/storage-zoom.module';
import {StorageChartsModule} from './charts/storage-charts.module';
import {StorageBackTopModule} from './back-top/storage-back-top.module';
import {StorageUploadModule} from './upload/storage-upload.module';
import {StorageAnchorModule} from './anchor/storage-anchor.module';
import {StorageCarouselModule} from './carousel/storage-carousel.module';
import {StorageSelectModule} from './select/storage-select.module';
// import {StorageTableModule} from './table/storage-table.module';
import {StorageInputModule} from './input/storage-input.module';
import {StorageExportExcelModule} from './export-excel/storage-export-excel.module';

export * from './button';
export * from './input-number';
export * from './modal';
export * from './zoom';
export * from './charts';
export * from './back-top';
export * from './upload';
export * from './anchor';
export * from './carousel';
export * from './select';
// export * from './table';
export * from './input';
export * from './decorator';
export * from './export-excel';

@NgModule({
  exports: [
    StorageButtonModule,
    StorageInputNumberModule,
    StorageModalModule,
    StorageZoomModule,
    StorageChartsModule,
    StorageBackTopModule,
    StorageUploadModule,
    StorageAnchorModule,
    StorageCarouselModule,
    StorageSelectModule,
    // StorageTableModule,
    StorageInputModule,
    StorageExportExcelModule
  ]
})
export class BangStorageUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BangStorageUiModule
    };
  }
}
