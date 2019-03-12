import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[storage-td]',
  templateUrl: './storage-td.component.html',
  styleUrls: ['./storage-td.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class StorageTdComponent {
  @HostBinding('class.storage-td') class = true;
}
