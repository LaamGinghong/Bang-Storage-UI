import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageTableComponent} from './storage-table.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {StringTemplateOutletDirective} from './string-template-outlet.directive';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    DragDropModule
  ],
  declarations: [
    StorageTableComponent,
    StringTemplateOutletDirective
  ],
  exports: [
    StorageTableComponent
  ]
})
export class StorageTableModule {
}
