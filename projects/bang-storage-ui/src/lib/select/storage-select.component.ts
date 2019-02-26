import {AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, Output, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {StorageOptionComponent} from './storage-option.component';
import {InputBoolean} from 'ng-zorro-antd';

@Component({
  selector: 'storage-select',
  templateUrl: './storage-select.component.html',
  styleUrls: ['./storage-select.component.less']
})
export class StorageSelectComponent implements AfterViewInit {
  @ContentChildren(StorageOptionComponent) selectOptions: QueryList<StorageOptionComponent>;
  @ViewChild('inputElement') inputElement: ElementRef;
  @ViewChildren('itemElements') itemElements: QueryList<ElementRef>;
  @Input('storageValue') value: any;
  @Input('storagePlaceholder') placeholder = '';
  @Input('storageShowClose') @InputBoolean() showClose = false;
  @Output() storageValueChange = new EventEmitter<any>();
  public width: number;
  public showContainer = false;
  public name: string = null;
  public showCloseIcon = false;

  constructor(
    private _renderer: Renderer2
  ) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.width = this.inputElement.nativeElement.offsetWidth);
  }

  @HostListener('window:click', ['$event'])
  listenClick(e: MouseEvent): void {
    if (this.itemElements.some(item => item.nativeElement === e.srcElement)) {
      return;
    }
    this.showContainer = false;
  }

  changeValue(e: { value: any, name: string }): void {
    this.value = e.value;
    this.name = e.name;
    this.storageValueChange.emit(e.value);
    this.showContainer = false;
  }

  clearValue(): void {
    this.value = null;
    this.name = null;
    this.storageValueChange.emit(null);
  }
}
