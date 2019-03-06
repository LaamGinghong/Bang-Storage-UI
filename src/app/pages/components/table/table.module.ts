import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableRoutingModule} from './table-routing.module';
import {TableComponent} from './table.component';
import {ShareModule} from '../../../share/share.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    ShareModule
  ]
})
export class TableModule {
}
