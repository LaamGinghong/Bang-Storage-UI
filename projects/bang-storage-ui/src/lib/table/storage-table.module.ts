import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageTableComponent} from './storage-table.component';

@NgModule({
  declarations: [StorageTableComponent],
  imports: [
    CommonModule
  ],
  exports: [StorageTableComponent]
})
export class StorageTableModule {
}
