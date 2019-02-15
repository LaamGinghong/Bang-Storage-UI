import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel.component';
import {CarouselRoutingModule} from './carousel-routing.module';
import {ShareModule} from '../../../share/share.module';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    CarouselRoutingModule,
    ShareModule
  ]
})
export class CarouselModule {
}
