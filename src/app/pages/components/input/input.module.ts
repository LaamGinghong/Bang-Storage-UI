import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputRoutingModule} from './input-routing.module';
import {InputComponent} from './input.component';
import {ShareModule} from '../../../share/share.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    InputRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InputModule {
}
