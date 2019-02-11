import {ModuleWithProviders, NgModule} from '@angular/core';
import {StorageButtonModule} from './button';
import {StorageInputNumberModule} from './input-number';
import {StorageModalModule} from './modal';
import {StorageZoomModule} from './zoom';
import {StorageChartsModule} from './charts';
import {StorageBackTopModule} from './back-top';
import {StorageUploadModule} from './upload';

export * from './button';
export * from './input-number';
export * from './modal';
export * from './zoom';
export * from './charts';
export * from './back-top';
export * from './upload';

@NgModule({
  exports: [
    StorageButtonModule,
    StorageInputNumberModule,
    StorageModalModule,
    StorageZoomModule,
    StorageChartsModule,
    StorageBackTopModule,
    StorageUploadModule
  ]
})
export class BangStorageUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BangStorageUiModule
    };
  }
}
