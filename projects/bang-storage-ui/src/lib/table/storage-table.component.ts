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
  @Input('storageTableChangeWidth') @InputBoolean() changeWidth = false;
  @Input('storageCheckbox') @InputBoolean() checkbox = true;
  @Input('storageTitle') title: TemplateRef<void> | string;
  @Input('storageFooter') footer: TemplateRef<void> | string;

  public defaultWidth = 30;

  constructor() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.tableSource) {
        const width = this.checkbox ? this.theadTrElement.nativeElement.offsetWidth - 80 : this.theadTrElement.nativeElement.offsetWidth;
        this.defaultWidth = 1 / this.tableSource.length * width - 1;
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tableSource, event.previousIndex, event.currentIndex);
  }


}

export interface StorageTableSource {
  title: string;
  value: string | string[];
}
