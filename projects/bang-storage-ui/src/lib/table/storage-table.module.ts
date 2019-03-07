import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageTableComponent} from './storage-table.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {StringTemplateOutletDirective} from './string-template-outlet.directive';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
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
