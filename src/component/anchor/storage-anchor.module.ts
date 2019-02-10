import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageAnchorComponent} from './storage-anchor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StorageAnchorComponent],
  exports: [StorageAnchorComponent]
})

export class StorageAnchorModule {
}
