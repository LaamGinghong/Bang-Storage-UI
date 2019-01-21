import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import {BangStorageUiModule} from '../../component/bang-storage-ui.module';
import {BangStorageUiModule} from 'bang-storage-ui';
import {HighlightModule} from 'ngx-highlightjs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BangStorageUiModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighlightModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  exports: [
    BangStorageUiModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighlightModule
  ]
})
export class ShareModule {
}
