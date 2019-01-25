import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackTopComponent} from './back-top.component';
import {BackTopRoutingModule} from './back-top-routing.module';
import {ShareModule} from '../../../share/share.module';

@NgModule({
  declarations: [BackTopComponent],
  imports: [
    CommonModule,
    BackTopRoutingModule,
    ShareModule
  ]
})
export class BackTopModule {
}
