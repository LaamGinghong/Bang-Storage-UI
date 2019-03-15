import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation} from '@angular/core';
import {InputBoolean, InputNumber} from 'ng-zorro-antd';
import {StorageTableService} from './storage-table.service';

@Component({
  selector: 'storage-table',
  templateUrl: './storage-table.component.html',
  styleUrls: ['./storage-table.component.less'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorageTableComponent implements AfterViewInit, OnInit {
  data = [];
  @Input('storageTableData') tableData = [];
  @Input('storageTitle') title: string | TemplateRef<void>;
  @Input('storageFooter') footer: string | TemplateRef<void>;
  @Input('storageChangeWidth') @InputBoolean() changeWidth = false;
  @Input('storageLoading') @InputBoolean() loading = false;
  @Input('storageTotal') @InputNumber() total = 0;
  @Input('storageShowPagination') @InputBoolean() showPagination = true;
  @Input('storageShowSizeChanger') @InputBoolean() showSizeChanger = true;
  @Input('storageShowQuickJumper') @InputBoolean() showQuickJumper = false;
  @Input('storageFrontPagination') @InputBoolean() frontPagination = false;
  @Input('storagePageIndex') @InputNumber() pageIndex = 1;
  @Input('storagePageSize') @InputNumber() pageSize = 10;
  @Output('storagePageIndexChange') pageIndexChange = new EventEmitter<number>();
  @Output('storagePageSizeChange') pageSizeChange = new EventEmitter<number>();

  constructor(
    private _storageTableService: StorageTableService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this._changeDetectorRef.markForCheck();
    this._initTable();
  }

  ngAfterViewInit(): void {
    this._storageTableService.storageChangeWidth$.next(this.changeWidth);
  }

  private _initTable(): void {
    let data = [];
    if (this.frontPagination) {
      this.total = this.tableData.length;
      data = this.tableData.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize);
    } else {
      data = this.tableData;
    }
    this.data = [...data];
  }

  public changePage(type: 'pageIndex' | 'pageSize'): void {
    this._initTable();
    (this[`${type}Change`] as EventEmitter<number>).emit(this[type]);
  }
}
