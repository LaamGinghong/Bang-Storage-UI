import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageCarouselComponent} from './storage-carousel.component';
import {StorageCarouselContentComponent} from './storage-carousel-content.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': {velocity: 0.5, threshold: 5} // override default settings
  };
}

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [StorageCarouselComponent, StorageCarouselContentComponent],
  exports: [StorageCarouselComponent, StorageCarouselContentComponent],
  providers: [{provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}]
})
export class StorageCarouselModule {
}
