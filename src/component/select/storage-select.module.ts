import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageSelectComponent} from './storage-select.component';

@NgModule({
  declarations: [StorageSelectComponent],
  imports: [
    CommonModule
  ],
  exports: [StorageSelectComponent]
})
export class StorageSelectModule {
}
