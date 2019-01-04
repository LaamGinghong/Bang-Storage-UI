import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageButtonComponent} from './storage-button.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [StorageButtonComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [StorageButtonComponent]
})
export class StorageButtonModule {
}
