import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageBackTopComponent} from './storage-back-top.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {StorageBackTopService} from './storage-back-top.service';

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [StorageBackTopComponent],
  exports: [StorageBackTopComponent],
  providers: [StorageBackTopService]
})

export class StorageBackTopModule {
}
