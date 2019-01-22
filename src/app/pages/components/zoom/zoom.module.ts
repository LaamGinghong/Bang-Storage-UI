import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZoomComponent} from './zoom.component';
import {ZoomRoutingModule} from './zoom-routing.module';

@NgModule({
  declarations: [ZoomComponent],
  imports: [
    CommonModule,
    ZoomRoutingModule
  ]
})
export class ZoomModule {
}
