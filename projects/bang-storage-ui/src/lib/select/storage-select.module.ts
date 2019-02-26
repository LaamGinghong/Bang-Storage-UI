import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageSelectComponent} from './storage-select.component';
import {StorageOptionComponent} from './storage-option.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, NgZorroAntdModule, FormsModule, ReactiveFormsModule],
  declarations: [StorageSelectComponent, StorageOptionComponent],
  exports: [StorageSelectComponent, StorageOptionComponent]
})
export class StorageSelectModule {
}
