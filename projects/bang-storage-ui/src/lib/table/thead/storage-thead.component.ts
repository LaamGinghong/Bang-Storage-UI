import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[storage-thead]',
  templateUrl: './storage-thead.component.html',
  styleUrls: ['./storage-thead.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class StorageTheadComponent {
  @HostBinding('class.storage-thead') class = true;
}
