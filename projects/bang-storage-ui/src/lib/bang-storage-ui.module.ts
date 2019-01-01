import {ModuleWithProviders, NgModule} from '@angular/core';
import {ButtonModule} from './button';

export * from './button';

@NgModule({
  exports: [ButtonModule]
})
export class BangStorageUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BangStorageUiModule
    };
  }
}
