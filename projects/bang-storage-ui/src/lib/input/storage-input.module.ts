import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageInputDirective} from './storage-input.directive';
import {StorageInputTitleComponent} from './storage-input-title.component';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [
    StorageInputDirective,
    StorageInputTitleComponent
  ],
  exports: [
    StorageInputDirective
  ],
  entryComponents: [StorageInputTitleComponent]
})
export class StorageInputModule {
}
