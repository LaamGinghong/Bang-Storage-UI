import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageTableComponent} from './storage-table.component';
import {StorageTheadComponent} from './thead/storage-thead.component';
import {StorageTrComponent} from './tr/storage-tr.component';
import {StorageThComponent} from './th/storage-th.component';
import {StorageTbodyComponent} from './tbody/storage-tbody.component';
import {StorageTdComponent} from './td/storage-td.component';
import {StorageTableService} from './storage-table.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {StorageThDirective} from './th/storage-th.directive';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    NgZorroAntdModule
  ],
  exports: [
    StorageTableComponent,
    StorageTheadComponent,
    StorageTrComponent,
    StorageThComponent,
    StorageTbodyComponent,
    StorageTdComponent
  ],
  declarations: [
    StorageTableComponent,
    StorageTheadComponent,
    StorageTrComponent,
    StorageThComponent,
    StorageTbodyComponent,
    StorageTdComponent,
    StorageThDirective,
  ],
  providers: [StorageTableService]
})
export class StorageTableModule {
}
