import {ComponentRef, Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2, ViewContainerRef} from '@angular/core';
import {InputBoolean} from 'ng-zorro-antd';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {StorageInputTitleComponent} from './storage-input-title.component';

@Directive({
  selector: '[storage-input]',
  host: {
    '[class.ant-input-disabled]': 'disabled',
    '[class.ant-input-lg]': `size === 'large'`,
    '[class.ant-input-sm]': `size === 'small'`
  }
})
export class StorageInputDirective implements OnChanges, OnDestroy {
  @Input('storageDisabled') @InputBoolean() disabled = false;
  @Input('storageSize') size: 'small' | 'default' | 'large' = 'default';
  @Input('storageValue') value: any;

  private _container: HTMLElement;
  private _overlayRef: OverlayRef;
  private _componentRef: ComponentRef<StorageInputTitleComponent>;
  private _placeholder: string;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef
  ) {
    this.initInput();
    this.initComponent();
  }

  initInput(): void {
    this._renderer.addClass(this._elementRef.nativeElement, 'ant-input');
    this._container = this._renderer.createElement('span');
    this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._container);
    this._renderer.appendChild(this._container, this._elementRef.nativeElement);
    this._placeholder = this._elementRef.nativeElement.placeholder;
  }

  initComponent() {
    const strategy = this._overlay.position().flexibleConnectedTo(this._container).withPositions([{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top',
      offsetX: 10,
      offsetY: -20
    }]);
    strategy.withLockedPosition(true);
    const config = new OverlayConfig({positionStrategy: strategy});
    config.scrollStrategy = this._overlay.scrollStrategies.reposition();
    this._overlayRef = this._overlay.create(config);
    this._componentRef = this._overlayRef.attach(new ComponentPortal(StorageInputTitleComponent, this._viewContainerRef));
    this._componentRef.instance.placeholder = this._placeholder;
  }

  ngOnChanges(): void {
    this._componentRef.instance.value = this.value;
  }

  ngOnDestroy(): void {
    this._overlayRef.dispose();
  }
}
