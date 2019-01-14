import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {ShareModule} from '../../share/share.module';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
