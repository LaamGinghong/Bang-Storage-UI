import {ModuleWithProviders, NgModule} from '@angular/core';
import {ButtonModule} from './button';
import {InputNumberModule} from './input-number';

export * from './button';
export * from './input-number';

@NgModule({
  exports: [
    ButtonModule,
    InputNumberModule
  ]
})
export class BangStorageUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BangStorageUiModule
    };
  }
}
