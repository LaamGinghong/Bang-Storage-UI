import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[storage-tr]',
  templateUrl: './storage-tr.component.html',
  styleUrls: ['./storage-tr.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class StorageTrComponent {
  @HostBinding('class.storage-tr') class = true;

  constructor() {
  }
}
