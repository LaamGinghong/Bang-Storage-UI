import {Component} from '@angular/core';

@Component({
  selector: 'storage-table',
  templateUrl: './storage-table.component'
})
export class StorageTableComponent {
}

export interface StorageTableSource {
  title: string;
  value: string | string[];
  width: number;
}
