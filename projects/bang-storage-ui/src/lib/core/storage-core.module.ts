import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StringTemplateOutletDirective} from './string-template-outlet.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [StringTemplateOutletDirective],
  exports: [StringTemplateOutletDirective]
})
export class StorageCoreModule {
}
