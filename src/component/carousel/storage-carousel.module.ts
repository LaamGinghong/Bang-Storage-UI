import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../../app/share/share.module';
import {StorageCarouselComponent} from './storage-carousel.component';
import {StorageCarouselContentComponent} from './storage-carousel-content.component';

@NgModule({
  imports: [CommonModule, ShareModule],
  declarations: [StorageCarouselComponent, StorageCarouselContentComponent],
  exports: [StorageCarouselComponent]
})
export class StorageCarouselModule {
}
