import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[storage-th]',
  templateUrl: './storage-th.component.html',
  styleUrls: ['./storage-th.component.less'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorageThComponent {
  @HostBinding('class.storage-th') class = true;
}
