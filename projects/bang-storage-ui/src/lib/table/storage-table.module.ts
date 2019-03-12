import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageTableComponent} from './storage-table.component';
import {StorageTheadComponent} from './thead/storage-thead.component';
import {StorageTrComponent} from './tr/storage-tr.component';
import {StorageThComponent} from './th/storage-th.component';

@NgModule({
  imports: [CommonModule],
  exports: [StorageTableComponent, StorageTheadComponent, StorageTrComponent, StorageThComponent],
  declarations: [StorageTableComponent, StorageTheadComponent, StorageTrComponent, StorageThComponent]
})
export class StorageTableModule {
}
