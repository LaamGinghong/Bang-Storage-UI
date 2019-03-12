import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[storage-tbody]',
  templateUrl: './storage-tbody.component.html',
  styleUrls: ['./storage-tbody.component.less'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorageTbodyComponent {
  @HostBinding('class.storage-tbody') class = true;
}
