import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableRoutingModule} from './table-routing.module';
import {TableComponent} from './table.component';
import {BangStorageUiModule} from '../../../../../projects/bang-storage-ui/src/lib/bang-storage-ui.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HighlightModule} from 'ngx-highlightjs';

// import {ShareModule} from '../../../share/share.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    // ShareModule
    BangStorageUiModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightModule
  ]
})
export class TableModule {
}
