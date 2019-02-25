import {ModuleWithProviders, NgModule} from '@angular/core';
import {StorageButtonModule} from './button';
import {StorageInputNumberModule} from './input-number';
import {StorageModalModule} from './modal';
import {StorageZoomModule} from './zoom';
import {StorageChartsModule} from './charts';
import {StorageBackTopModule} from './back-top';
import {StorageUploadModule} from './upload';
import {StorageAnchorModule} from './anchor';
import {StorageCarouselModule} from './carousel';
import {StorageSelectModule} from './select';

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
    StorageSelectModule
  ]
})
export class BangStorageUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BangStorageUiModule
    };
  }
}
