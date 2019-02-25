import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SelectRoutingModule} from './select-routing.module';
import {SelectComponent} from './select.component';
import {ShareModule} from '../../../share/share.module';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    SelectRoutingModule,
    ShareModule
  ]
})
export class SelectModule {
}
