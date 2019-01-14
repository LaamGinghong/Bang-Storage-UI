import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BangStorageUiModule} from 'bang-storage-ui';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BangStorageUiModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  exports: [
    BangStorageUiModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShareModule {
}
