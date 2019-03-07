import {Component, Input, TemplateRef} from '@angular/core';
import {InputBoolean} from 'ng-zorro-antd';

@Component({
  selector: 'storage-table',
  templateUrl: './storage-table.component.html',
  styleUrls: ['./storage-table.component.less']
})
export class StorageTableComponent {
  @Input('storageTitle') @InputBoolean() title: TemplateRef<void> | string;
  @Input('storageFooter') @InputBoolean() footer: TemplateRef<void> | string;
}
