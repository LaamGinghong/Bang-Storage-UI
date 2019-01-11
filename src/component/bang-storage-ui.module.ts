import {NgModule} from '@angular/core';
import {StorageButtonModule} from './button/storage-button.module';
import {StorageInputNumberModule} from './input-number/storage-input-number.module';
import {StorageModalModule} from './modal/storage-modal.module';
import {StorageZoomModule} from './zoom/storage-zoom.module';
import {StorageChartsModule} from './charts/storage-charts.module';

@NgModule({
  exports: [
    StorageButtonModule,
    StorageInputNumberModule,
    StorageModalModule,
    StorageZoomModule,
    StorageChartsModule
  ]
})

export class BangStorageUiModule {
}
