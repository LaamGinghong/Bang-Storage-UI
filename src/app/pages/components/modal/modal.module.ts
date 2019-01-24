import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {ModalRoutingModule} from './modal-routing.module';
import {ModalInnerComponent} from './modal-inner/modal-inner.component';
import {ShareModule} from '../../../share/share.module';

@NgModule({
  declarations: [ModalComponent, ModalInnerComponent],
  imports: [
    CommonModule,
    ModalRoutingModule,
    ShareModule
  ],
  entryComponents: [ModalInnerComponent]
})
export class ModalModule {
}
