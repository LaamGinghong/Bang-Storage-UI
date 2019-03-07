import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import {InputBoolean} from 'ng-zorro-antd';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'storage-table',
  templateUrl: './storage-table.component.html',
  styleUrls: ['./storage-table.component.less']
})
export class StorageTableComponent implements AfterViewInit, OnChanges {
  @ViewChild('theadTrElement') theadTrElement: ElementRef;
  @Input('storageTableSource') tableSource: Array<StorageTableSource> = [];
  @Input('storageTableChangeWidth') @InputBoolean() changeWidth = false;
  @Input('storageCheckbox') @InputBoolean() checkbox = true;
  @Input('storageTitle') title: TemplateRef<void> | string;
  @Input('storageFooter') footer: TemplateRef<void> | string;

  public defaultWidth = '0';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tableSource) {
      this.defaultWidth = this.checkbox ? `calc(${1 / this.tableSource.length * 100}% - ${1 / this.tableSource.length * 49}px)` : `${1 / this.tableSource.length * 100}%`;
    }
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
}
