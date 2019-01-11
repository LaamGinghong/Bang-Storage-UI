import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageChartsDirective} from './storage-charts.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [StorageChartsDirective],
  exports: [StorageChartsDirective]
})
export class StorageChartsModule {
}
