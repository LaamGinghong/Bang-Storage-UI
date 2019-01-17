import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {ButtonRoutingModule} from './button-routing.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule
  ]
})
export class ButtonModule {
}
