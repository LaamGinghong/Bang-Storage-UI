import {ModuleWithProviders, NgModule} from '@angular/core';
import {StorageButtonModule} from './button';
import {StorageInputNumberModule} from './input-number';
import {StorageModalModule} from './modal';

export * from './button';
export * from './input-number';
export * from './modal';

@NgModule({
  exports: [
    StorageButtonModule,
    StorageInputNumberModule,
    StorageModalModule
  ]
})
export class BangStorageUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BangStorageUiModule
    };
  }
}
