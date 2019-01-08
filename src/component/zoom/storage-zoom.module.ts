import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageZoomComponent} from './storage-zoom.component';
import {StorageZoomDirective} from './storage-zoom.directive';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [StorageZoomComponent, StorageZoomDirective],
  entryComponents: [StorageZoomComponent],
  exports: [StorageZoomDirective]
})

export class StorageZoomModule {
}
