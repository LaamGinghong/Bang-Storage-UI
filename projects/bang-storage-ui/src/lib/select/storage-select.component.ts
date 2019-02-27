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
  @ViewChild('iconElement') iconElement: ElementRef;
  @ViewChild('searchElement') searchElement: ElementRef;
  @Input('storageValue') value: any;
  @Input('storagePlaceholder') placeholder = '';
  @Input('storageShowClose') @InputBoolean() showClose = false;
  @Input('storageDisabled') @InputBoolean() disabled = false;
  @Output() storageValueChange = new EventEmitter<any>();
  public width: number;
  public showContainer = false;
  public name: string = null;
  public showCloseIcon = false;
  public searchInput: string = null;

  constructor(
    private _renderer: Renderer2
  ) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.width = this.inputElement.nativeElement.offsetWidth);
  }

  @HostListener('window:click', ['$event'])
  listenClick(e: MouseEvent): void {
    if (this.searchElement) {
      if (e.srcElement === this.searchElement.nativeElement) {
        return;
      }
      this.showContainer = false;
      this._renderer.setStyle(this.iconElement.nativeElement, 'transform', 'rotate(0)');
    }
  }

  toggleContainer(e: MouseEvent): void {
    e.stopPropagation();
    this.showContainer = !this.showContainer;
    this.initArray();
    this._renderer.setStyle(this.iconElement.nativeElement, 'transform', `rotate(${this.showContainer ? '180deg' : 0})`);
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
    this.selectOptions.forEach(item => {
      item.selected = item.value === e.value;
    });
  }

  clearValue(): void {
    this.value = null;
    this.name = null;
    this.storageValueChange.emit(null);
  }

  search(e: string): void {
    this.selectOptions.forEach(item => {
      item.hidden = item.name.indexOf(e) < 0;
    });
  }
}
