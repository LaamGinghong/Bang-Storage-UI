import {AfterViewInit, Directive, ElementRef, Input, OnChanges, Optional, Renderer2, Self} from '@angular/core';
import {NgControl} from '@angular/forms';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Directive({
  selector: '[storage-input]',
  host: {
    '[class.ant-input-disabled]': 'disabled',
    '[class.ant-input-lg]': `size === 'large'`,
    '[class.ant-input-sm]': `size === 'small'`
  }
})
export class StorageInputDirective implements AfterViewInit, OnChanges {
  @Input()
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }

  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }


  @Input('storageSize') size: 'small' | 'default' | 'large' = 'default';
  @Input('storageValue') value: any = null;

  private _disabled = false;
  private _placeholder: string;
  private _container: HTMLElement;
  private _title: HTMLElement;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {
    this._initInput();
    this._initContainer();
    this._initTitle();
  }

  ngOnChanges(): void {
    if (this._title) {
      this._renderer.setStyle(this._title, 'opacity', `${this.value ? 1 : 0}`);
    }
  }

  ngAfterViewInit(): void {
    this._renderer.setStyle(this._title, 'opacity', 0);
  }

  private _initInput(): void {
    this._renderer.addClass(this._elementRef.nativeElement, 'ant-input');
    this._placeholder = this._elementRef.nativeElement.placeholder;
  }

  private _initContainer(): void {
    this._container = this._renderer.createElement('span');
    this._renderer.addClass(this._container, 'storage-input-container');
    this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._container);
    this._renderer.appendChild(this._container, this._elementRef.nativeElement);
  }

  private _initTitle(): void {
    this._title = this._renderer.createElement('span');
    this._renderer.addClass(this._title, 'storage-input-title');
    this._renderer.appendChild(this._title, this._renderer.createText(this._placeholder));
    this._renderer.appendChild(this._container, this._title);
  }


}
