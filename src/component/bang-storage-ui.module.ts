import {NgModule} from '@angular/core';
import {StorageButtonModule} from './button/storage-button.module';
import {StorageInputNumberModule} from './input-number/storage-input-number.module';

@NgModule({
  exports: [
    StorageButtonModule,
    StorageInputNumberModule,
  ]
})

export class BangStorageUiModule {
}
