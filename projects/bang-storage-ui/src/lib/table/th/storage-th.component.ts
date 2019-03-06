import {Component, Input} from '@angular/core';

@Component({
  selector: 'storage-th',
  templateUrl: './storage-th.component.html'
})
export class StorageThComponent {
  @Input('storageValue') value: string;
}
