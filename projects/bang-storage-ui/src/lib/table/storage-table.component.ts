import {ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'storage-table',
  templateUrl: './storage-table.component.html',
  styleUrls: ['./storage-table.component.less'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorageTableComponent {
  @Input('storageTitle') title: string | TemplateRef<void>;
  @Input('storageFooter') footer: string | TemplateRef<void>;

  constructor() {
  }
}
