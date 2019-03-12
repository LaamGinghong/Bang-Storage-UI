import {AfterViewInit, ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation} from '@angular/core';
import {InputBoolean} from 'ng-zorro-antd';
import {StorageTableService} from './storage-table.service';

@Component({
  selector: 'storage-table',
  templateUrl: './storage-table.component.html',
  styleUrls: ['./storage-table.component.less'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorageTableComponent implements AfterViewInit {
  @Input('storageTitle') title: string | TemplateRef<void>;
  @Input('storageFooter') footer: string | TemplateRef<void>;
  @Input('storageChangeWidth') @InputBoolean() changeWidth = false;

  constructor(
    private _storageTableService: StorageTableService
  ) {
  }

  ngAfterViewInit(): void {
    this._storageTableService.storageChangeWidth$.next(this.changeWidth);
  }

}
