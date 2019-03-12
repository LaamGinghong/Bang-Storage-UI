import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'storage-tr',
  templateUrl: './storage-tr.component.html',
  styleUrls: ['./storage-tr.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class StorageTrComponent {
}
