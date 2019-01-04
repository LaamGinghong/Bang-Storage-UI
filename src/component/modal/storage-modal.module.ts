import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageModalDirective} from './storage-modal.directive';
import {StorageModalService} from './storage-modal.service';

@NgModule({
  imports: [CommonModule],
  declarations: [StorageModalDirective],
  exports: [StorageModalDirective],
  providers: [StorageModalService]
})

export class StorageModalModule {
}
