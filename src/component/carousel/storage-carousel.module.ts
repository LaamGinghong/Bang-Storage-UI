import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageCarouselComponent} from './storage-carousel.component';
import {StorageCarouselContentComponent} from './storage-carousel-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StorageCarouselComponent, StorageCarouselContentComponent],
  exports: [StorageCarouselComponent, StorageCarouselContentComponent]
})
export class StorageCarouselModule {
}
