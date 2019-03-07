import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageTableComponent} from './storage-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StorageTableComponent
  ],
  exports: [
    StorageTableComponent
  ]
})
export class StorageTableModule {
}
