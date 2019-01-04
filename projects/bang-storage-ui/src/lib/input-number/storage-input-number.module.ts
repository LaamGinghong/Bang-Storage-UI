import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageInputNumberComponent} from './storage-input-number.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_MESSAGE_CONFIG, NzMessageConfig} from 'ng-zorro-antd';

const messageConfig: NzMessageConfig = {
  nzMaxStack: 1,
  nzDuration: 3000
};

@NgModule({
  declarations: [StorageInputNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [StorageInputNumberComponent],
  providers: [{
    provide: NZ_MESSAGE_CONFIG, useValue: messageConfig
  }]
})
export class StorageInputNumberModule {
}
