import {Component, Input} from '@angular/core';
import {InputBoolean} from 'ng-zorro-antd';

@Component({
  selector: 'storage-option',
  template: `
  `
})
export class StorageOptionComponent {
  @Input('storageValue') value: any;
  @Input('storageName') name: string;
  @Input('storageDisabled') @InputBoolean() disabled = false;
  hidden = false;
  selected = false;
}
