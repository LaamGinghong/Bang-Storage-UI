import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {ButtonRoutingModule} from './button-routing.module';
import {ShareModule} from '../../../share/share.module';
import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    ShareModule,
    HighlightModule
  ]
})
export class ButtonModule {
}
