import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {StorageCarouselComponent} from './storage-carousel.component';

import {StorageCarouselContentComponent} from './storage-carousel-content.component';

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [
    StorageCarouselComponent,
    StorageCarouselContentComponent
  ],
  exports: [
    StorageCarouselComponent,
    StorageCarouselContentComponent
  ]
})
export class StorageCarouselModule {
}
