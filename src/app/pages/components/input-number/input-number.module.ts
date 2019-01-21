import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputNumberComponent} from './input-number.component';
import {ShareModule} from '../../../share/share.module';
import {InputNumberRoutingModule} from './input-number-routing.module';

@NgModule({
  declarations: [InputNumberComponent],
  imports: [
    CommonModule,
    ShareModule,
    InputNumberRoutingModule
  ]
})
export class InputNumberModule {
}
