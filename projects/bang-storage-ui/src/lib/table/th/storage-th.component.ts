import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {StorageTableService} from '../storage-table.service';
import {Subscription} from 'rxjs';
import {InputNumber} from 'ng-zorro-antd';

@Component({
  selector: '[storage-th]',
  templateUrl: './storage-th.component.html',
  styleUrls: ['./storage-th.component.less'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorageThComponent implements OnInit, OnDestroy {
  @HostBinding('class.storage-th') class = true;
  private _storageChangeWidth$: Subscription;
  public changeWidth = false;

  constructor(
    private _storageTableService: StorageTableService,
    private _changeDetectorRef: ChangeDetectorRef,
    public elementRef: ElementRef
  ) {
  }

  ngOnInit(): void {
    this._storageChangeWidth$ = this._storageTableService.storageChangeWidth$.subscribe(value => {
      this.changeWidth = value;
      setTimeout(() => {
        this._changeDetectorRef.detectChanges();
      });
    });
  }

  ngOnDestroy(): void {
    this._storageChangeWidth$.unsubscribe();
  }
}
