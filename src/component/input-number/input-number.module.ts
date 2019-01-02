import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputNumberComponent} from './input-number.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_MESSAGE_CONFIG, NzMessageConfig} from 'ng-zorro-antd';

const messageConfig: NzMessageConfig = {
  nzMaxStack: 1,
  nzDuration: 3000
};

@NgModule({
  declarations: [InputNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [InputNumberComponent],
  providers: [{
    provide: NZ_MESSAGE_CONFIG, useValue: messageConfig
  }]
})
export class InputNumberModule {
}
