import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputNumberComponent} from './input-number.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [InputNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [InputNumberComponent]
})
export class InputNumberModule {
}
