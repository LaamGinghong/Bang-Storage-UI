import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageAnchorComponent} from './storage-anchor.component';
import {StorageLinkComponent} from './storage-link.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StorageAnchorComponent, StorageLinkComponent],
  exports: [StorageAnchorComponent, StorageLinkComponent]
})

export class StorageAnchorModule {
}
