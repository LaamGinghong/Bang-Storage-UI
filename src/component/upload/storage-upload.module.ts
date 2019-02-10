import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageUploadComponent} from './storage-upload.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StorageUploadComponent],
  exports: [StorageUploadComponent]
})
export class StorageUploadModule {
}
