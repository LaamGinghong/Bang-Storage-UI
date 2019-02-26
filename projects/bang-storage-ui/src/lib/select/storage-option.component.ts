import {Component, Input} from '@angular/core';

@Component({
  selector: 'storage-option',
  template: `
  `
})
export class StorageOptionComponent {
  @Input('storageValue') value: any;
  @Input('storageName') name: string;
  hidden = false;
}
