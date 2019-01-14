import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecommendComponent} from './recommend.component';
import {RecommendRoutingModule} from './recommend-routing.module';
import {ShareModule} from '../../share/share.module';

@NgModule({
  declarations: [RecommendComponent],
  imports: [
    CommonModule,
    RecommendRoutingModule,
    ShareModule
  ]
})
export class RecommendModule {
}
