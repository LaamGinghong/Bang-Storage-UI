import {AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, QueryList, Renderer2, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import {StorageOptionComponent} from './storage-option.component';
import {InputBoolean} from 'ng-zorro-antd';
import {StorageSelectSize} from './storage-select.interface';

@Component({
  selector: 'storage-select',
  templateUrl: './storage-select.component.html',
  styleUrls: ['./storage-select.component.less']
})
export class StorageSelectComponent implements AfterViewInit, OnChanges {
  @ContentChildren(StorageOptionComponent) selectOptions: QueryList<StorageOptionComponent>;
  @ViewChild('inputElement') inputElement: ElementRef;
  @ViewChild('iconElement') iconElement: ElementRef;
  @ViewChild('listElement') listElement: ElementRef;
  @ViewChild('searchElement') searchElement: ElementRef;
  @ViewChild('selectAllElement') selectAllElement: ElementRef;
  @ViewChildren('itemElement') itemElements: QueryList<ElementRef>;
  @Input('storageValue') value: any;
  @Input('storagePlaceholder') placeholder = '';
  @Input('storageWidth') inputWidth = 180;
  @Input('storageSize') size: StorageSelectSize = 'default';
  @Input('storageNotFoundContent') notFoundContent = '没有数据';
  @Input('storageAllowClear') @InputBoolean() allowClear = false;
  @Input('storageDisabled') @InputBoolean() disabled = false;
  @Input('storageOpen') @InputBoolean() showContainer = false;
  @Input('storageMultiple') @InputBoolean() multiple = false;
  @Input('storageShowSelectAll') @InputBoolean() showSelectAll = false;
  @Output() storageValueChange = new EventEmitter<any>();
  @Output() storageOpenChange = new EventEmitter<boolean>();
  @Output() storageScrollToBottom = new EventEmitter<void>();
  public name: string = null;
  public allowClearIcon = false;
  public searchInput: string = null;
  public isSelectAll = false;
  public selectedList: Array<{ value: any, name: string, disabled: boolean }> = [];

  constructor(
    private _renderer: Renderer2
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.value) {
      this.value = [];
    }
  }

  ngAfterViewInit(): void {
  }

  @HostListener('window:click', ['$event'])
  listenClick(e: MouseEvent): void {
    if (this.searchElement && e.srcElement === this.searchElement.nativeElement) {
      return;
    }
    if (this.multiple) {
      if (this.itemElements.some(item => item.nativeElement === e.srcElement)) {
        return;
      }
      if (this.selectAllElement && e.srcElement === this.selectAllElement.nativeElement) {
        return;
      }
    }
    this.showContainer = false;
    this.storageOpenChange.emit(this.showContainer);
    this._renderer.setStyle(this.iconElement.nativeElement, 'transform', 'rotate(0)');
  }

  toggleContainer(e: MouseEvent): void {
    if (!this.disabled) {
      e.stopPropagation();
      this.showContainer = !this.showContainer;
      this.initArray();
      this.storageOpenChange.emit(this.showContainer);
      this._renderer.setStyle(this.iconElement.nativeElement, 'transform', `rotate(${this.showContainer ? '180deg' : 0})`);
      if (this.showContainer) {
        setTimeout(() => {
          if (this.listElement) {
            this._renderer.listen(this.listElement.nativeElement, 'scroll', (event: Event) => {
              if (event.srcElement.clientHeight + event.srcElement.scrollTop >= event.srcElement.scrollHeight) {
                this.storageScrollToBottom.emit();
              }
            });
          }
        });
      }
    }
  }

  initArray(): void {
    this.searchInput = null;
    this.selectOptions.forEach(item => item.hidden = false);
  }

  changeValue(e: { value: any, name: string, disabled: boolean }): void {
    if (e.disabled) {
      return;
    }
    this.value = e.value;
    this.name = e.name;
    this.storageValueChange.emit(e.value);
    this.showContainer = false;
    this.storageOpenChange.emit(this.showContainer);
    this.selectOptions.forEach(item => item.selected = item.value === e.value);
    this._renderer.setStyle(this.iconElement.nativeElement, 'transform', 'rotate(0)');
  }

  clearValue(): void {
    this.value = null;
    this.name = null;
    this.storageValueChange.emit(null);
    this.selectOptions.forEach(item => item.selected = false);
  }

  search(e: string): void {
    this.selectOptions.forEach(item => item.hidden = item.name.indexOf(e) < 0);
  }

  changeValueMultiple(e: { value: any, name: string, disabled: boolean }): void {
    if (e.disabled) {
      return;
    }
    this.selectOptions.forEach(item => {
      if (item.value === e.value) {
        item.selected = !item.selected;
      }
    });
    this.value = this.selectOptions.filter(item => item.selected).map(item => item.value);
    this.selectedList = this.selectOptions.filter(item => item.selected);
    this.storageValueChange.emit(this.value);
  }

  selectAll(): void {
    this.isSelectAll = !this.isSelectAll;
    this.selectOptions.forEach(item => item.selected = this.isSelectAll);
    this.value = this.selectOptions.filter(item => item.selected).map(item => item.value);
    this.selectedList = this.selectOptions.filter(item => item.selected);
    this.storageValueChange.emit(this.value);
  }
}
