import {NgModule} from '@angular/core';
import {StorageButtonModule} from './button/storage-button.module';
import {StorageInputNumberModule} from './input-number/storage-input-number.module';
import {StorageModalModule} from './modal/storage-modal.module';

@NgModule({
  exports: [
    StorageButtonModule,
    StorageInputNumberModule,
    StorageModalModule
  ]
})

export class BangStorageUiModule {
}
