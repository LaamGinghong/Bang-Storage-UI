import {AfterContentInit, Component, ContentChildren, QueryList, ViewEncapsulation} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {StorageThComponent} from '../th/storage-th.component';

@Component({
  selector: 'storage-tr',
  templateUrl: './storage-tr.component.html',
  styleUrls: ['./storage-tr.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class StorageTrComponent implements AfterContentInit {
  @ContentChildren(StorageThComponent) storageThComponents: QueryList<StorageThComponent>;
  ths: string[];

  drop(e: CdkDragDrop<string[]>): void {
    console.log(e);
    moveItemInArray(this.ths, e.previousIndex, e.currentIndex);
  }

  ngAfterContentInit(): void {
    this.ths = this.storageThComponents.toArray().map(item => item.value);
  }
}
