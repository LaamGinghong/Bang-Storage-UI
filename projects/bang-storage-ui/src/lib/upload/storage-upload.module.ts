import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageUploadComponent} from './storage-upload.component';
import {NgZorroAntdModule, NZ_MESSAGE_CONFIG, NzMessageConfig} from 'ng-zorro-antd';
import {StorageButtonModule} from '../button';

const messageConfig: NzMessageConfig = {
  nzMaxStack: 1,
  nzDuration: 3000
};

@NgModule({
  imports: [CommonModule, StorageButtonModule, NgZorroAntdModule],
  declarations: [StorageUploadComponent],
  exports: [StorageUploadComponent],
  providers: [
    {
      provide: NZ_MESSAGE_CONFIG, useValue: messageConfig
    }
  ]
})
export class StorageUploadModule {
}
