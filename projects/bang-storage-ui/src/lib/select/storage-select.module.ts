import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageSelectComponent} from './storage-select.component';
import {StorageOptionComponent} from './storage-option.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StorageSelectComponent, StorageOptionComponent],
  exports: [StorageSelectComponent, StorageOptionComponent]
})
export class StorageSelectModule {
}
