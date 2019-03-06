import {AfterContentInit, Component, ContentChild, ViewEncapsulation} from '@angular/core';
import {StorageTheadComponent} from '../thead/storage-thead.component';
import {StorageTbodyComponent} from '../tbody/storage-tbody.component';

@Component({
  selector: 'storage-table',
  templateUrl: './storage-table.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./storage-table.component.less']
})
export class StorageTableComponent implements AfterContentInit {
  @ContentChild(StorageTheadComponent) thead: StorageTheadComponent;
  @ContentChild(StorageTbodyComponent) tbody: StorageTbodyComponent;

  ngAfterContentInit(): void {
    console.log(this.thead, this.tbody);
  }
}
