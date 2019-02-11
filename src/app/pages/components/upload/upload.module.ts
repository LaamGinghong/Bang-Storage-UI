import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadComponent} from './upload.component';
import {UploadRoutingModule} from './upload-routing.module';
import {ShareModule} from '../../../share/share.module';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    ShareModule
  ]
})
export class UploadModule {
}
