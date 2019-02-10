import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnchorComponent} from './anchor.component';
import {AnchorRoutingModule} from './anchor-routing.module';

@NgModule({
  declarations: [AnchorComponent],
  imports: [
    CommonModule,
    AnchorRoutingModule
  ]
})
export class AnchorModule {
}
