import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageTableComponent} from './table/storage-table.component';
import {StorageTheadComponent} from './thead/storage-thead.component';
import {StorageTbodyComponent} from './tbody/storage-tbody.component';
import {StorageTrComponent} from './tr/storage-tr.component';
import {StorageThComponent} from './th/storage-th.component';
import {StorageTdComponent} from './td/storage-td.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [CommonModule, DragDropModule],
  declarations: [
    StorageTableComponent,
    StorageTheadComponent,
    StorageTbodyComponent,
    StorageTrComponent,
    StorageThComponent,
    StorageTdComponent
  ],
  exports: [
    StorageTableComponent,
    StorageTheadComponent,
    StorageTbodyComponent,
    StorageTrComponent,
    StorageThComponent,
    StorageTdComponent
  ]
})
export class StorageTableModule {
}
