import {Component, Input} from '@angular/core';

@Component({
  template: `
    <span class="storage-input-title" [style.opacity]="value?1:0">{{placeholder}}</span>
  `,
  styles: [`
    .storage-input-title {
      padding: 0 4px;
      background: #fff;
      color: rgba(0, 0, 0, .65);
      transition: opacity ease-in-out .2s;
    }
  `]
})
export class StorageInputTitleComponent {
  @Input('storagePlaceholder') placeholder: string;
  @Input('storageValue') value: any;
}
