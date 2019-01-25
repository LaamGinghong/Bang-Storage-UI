import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsComponent} from './charts.component';
import {ChartsRoutingModule} from './charts-routing.module';
import {ShareModule} from '../../../share/share.module';

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    ShareModule
  ]
})
export class ChartsModule {
}
