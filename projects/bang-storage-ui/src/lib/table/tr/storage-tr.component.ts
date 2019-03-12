import {AfterViewChecked, ChangeDetectionStrategy, Component, ContentChildren, HostBinding, QueryList, ViewEncapsulation} from '@angular/core';
import {StorageThComponent} from '../th/storage-th.component';

@Component({
  selector: '[storage-tr]',
  templateUrl: './storage-tr.component.html',
  styleUrls: ['./storage-tr.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class StorageTrComponent implements AfterViewChecked {
  @HostBinding('class.storage-tr') class = true;
  @ContentChildren(StorageThComponent)
  ths: QueryList<StorageThComponent>;

  constructor() {
  }

  ngAfterViewChecked(): void {
    this.ths.forEach((item, index) => {
      if (index === this.ths.length - 1) {
        item.changeWidth = false;
      }
    });
  }
}
