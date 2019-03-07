import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageTableComponent} from './storage-table.component';
import {StorageTheadComponent} from './thead/storage-thead.component';
import {StringTemplateOutletDirective} from './string-template-outlet.directive';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [StorageTableComponent, StorageTheadComponent, StringTemplateOutletDirective],
  exports: [StorageTableComponent, StorageTheadComponent, StringTemplateOutletDirective]
})
export class StorageTableModule {
}
