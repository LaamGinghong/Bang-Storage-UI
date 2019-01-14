import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsingComponent} from './using.component';
import {ShareModule} from '../../share/share.module';
import {UsingRougingModule} from './using-rouging.module';

@NgModule({
  declarations: [UsingComponent],
  imports: [
    CommonModule,
    ShareModule,
    UsingRougingModule
  ]
})
export class UsingModule {
}
