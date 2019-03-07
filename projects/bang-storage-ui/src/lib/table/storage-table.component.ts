import {AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {InputBoolean} from 'ng-zorro-antd';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'storage-table',
  templateUrl: './storage-table.component.html',
  styleUrls: ['./storage-table.component.less']
})
export class StorageTableComponent implements AfterViewInit {
  @ViewChild('theadTrElement') theadTrElement: ElementRef;
  @Input('storageTableSource') tableSource: Array<StorageTableSource> = [];
  @Input('storageTableChangeWidth') @InputBoolean() changeWidth = true;
  @Input('storageTitle') title: TemplateRef<void> | string;

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tableSource, event.previousIndex, event.currentIndex);
  }


}

export interface StorageTableSource {
  title: string;
  value: string | string[];
  width?: number;
}
