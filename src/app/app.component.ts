import {Component} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {StorageModalService} from 'bang-storage-ui';

// import {StorageModalService} from '../component/modal/storage-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
    private nzModalService: NzModalService,
    private storageModalService: StorageModalService
  ) {
  }

  create(): void {
    const modal = this.nzModalService.create({
      nzTitle: '可拖动模态框',
      nzWidth: 800,
      nzMaskClosable: false
    });
    modal.afterOpen.subscribe(() => {
      this.storageModalService.initModal();
      this.storageModalService.initZoom();
    });
  }
}
