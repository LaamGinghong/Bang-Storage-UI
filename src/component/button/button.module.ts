import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule {
}
