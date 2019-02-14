import {Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {ModalInnerComponent} from './modal-inner/modal-inner.component';
// import {StorageModalService} from '../../../../component/modal/storage-modal.service';
import {StorageModalService} from 'bang-storage-ui';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  codeBox = {
    first: {
      show: false,
      source: `
      import { NgModule, Component } from '@angular/core';
      import { CommonModule } from '@angular/common';
      import { NgZorroAntdModule, NzModalService } from 'ng-zorro-antd';
      import { BangStorageUIModule, StorageModalService } from 'bang-storage-ui';
      import { ModalInnerComponent } from './modal-inner-modal-inner.component';

      @Component({
        selector: 'storage-move-modal-demo',
        template: \`
                      <div storage-move-modal>
                         <button storage-button storageType="primary" (click)="open()">Show Modal</button>
                      </div>
                  \`
      })

      export class StorageMoveModalDemoComponent{

         constructor(
                    private _modal: NzModalService,
                    private _moveModal: StorageModalService
                    ) {
                      }

        open(): void{
          const modal = this._modal.create({
             nzTitle: 'Title',
             nzContent: ModalInnerComponent
          });
          modal.afterOpen.subscribe(() => {
            this._moveModal.initModal();
          })
        }
      }

      @NgModule({
        import: [ CommonModule, NgZorroAntdModule, BangStorageUIModule],
        declarations: [StorageMoveModalDemoComponent, ModalInnerComponent],
        entryComponents: [ModalInnerComponent]
      })

      export class StorageMoveModalDemoModule{
      }
      `
    },
    second: {
      show: false,
      source: `
      import { NgModule, Component } from '@angular/core';
      import { CommonModule } from '@angular/common';
      import { NgZorroAntdModule, NzModalService } from 'ng-zorro-antd';
      import { BangStorageUIModule, StorageModalService } from 'bang-storage-ui';
      import { ModalInnerComponent } from './modal-inner-modal-inner.component';

      @Component({
        selector: 'storage-zoom-modal-demo',
        template: \`
                      <div storage-move-modal>
                         <button storage-button storageType="primary" (click)="open()">Show Modal</button>
                      </div>
                  \`
      })

      export class StorageZoomModalDemoComponent{

         constructor(
                    private _modal: NzModalService,
                    private _moveModal: StorageModalService
                    ) {
                      }

        open(): void{
          const modal = this._modal.create({
             nzTitle: 'Title',
             nzContent: ModalInnerComponent
          });
          modal.afterOpen.subscribe(() => {
             this._moveModal.initModal();
             this._moveModal.initZoom();
          })
        }
      }

      @NgModule({
        import: [ CommonModule, NgZorroAntdModule, BangStorageUIModule],
        declarations: [StorageZoomModalDemoComponent, ModalInnerComponent],
        entryComponents: [ModalInnerComponent]
      })

      export class StorageZoomModalDemoModule{
      }
      `
    }
  };

  constructor(
    private _modal: NzModalService,
    private _moveModal: StorageModalService
  ) {
  }

  ngOnInit() {
  }

  open1(): void {
    const modal = this._modal.create({
      nzTitle: 'Title',
      nzContent: ModalInnerComponent
    });
    modal.afterOpen.subscribe(() => {
      this._moveModal.initModal();
      // this._moveModal.initZoom();
    });
  }

  open2(): void {
    const modal = this._modal.create({
      nzTitle: 'Title',
      nzContent: ModalInnerComponent
    });
    modal.afterOpen.subscribe(() => {
      this._moveModal.initModal();
      this._moveModal.initZoom();
    });
  }
}
