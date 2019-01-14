import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ShareModule
  ]
})
export class PagesModule {
}
