import {ModuleWithProviders, NgModule} from '@angular/core';
import {StorageButtonModule} from './button';
import {StorageInputNumberModule} from './input-number';
import {StorageModalModule} from './modal';
import {StorageZoomModule} from './zoom';
import {StorageChartsModule} from './charts';

export * from './button';
export * from './input-number';
export * from './modal';
export * from './zoom';
export * from './charts';

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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BangStorageUiModule
    };
  }
}
