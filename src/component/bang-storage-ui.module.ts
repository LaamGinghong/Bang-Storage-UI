import {NgModule} from '@angular/core';
import {ButtonModule} from './button/button.module';
import {InputNumberModule} from './input-number/input-number.module';

@NgModule({
  exports: [
    ButtonModule,
    InputNumberModule
  ]
})

export class BangStorageUiModule {
}
