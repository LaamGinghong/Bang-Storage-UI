import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {ButtonSize, ButtonType} from './button';

@Component({
  selector: '[storage-button]',
  template: `
    <i nz-icon type="loading" *ngIf="storageLoading"></i>
    <span [style.marginLeft]="storageLoading?'10px':'0'"><ng-content></ng-content></span>
  `,
  styleUrls: ['./button.component.less'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  readonly el: HTMLElement = this.elementRef.nativeElement;

  @Input()
  set storageLoading(value: boolean) {
    this._loading = value;
    value ? this.renderer.addClass(this.el, 'storage-button-loading') : this.renderer.removeClass(this.el, 'storage-button-loading');
  }

  get storageLoading(): boolean {
    return this._loading;
  }

  @Input()
  set storageType(value: ButtonType) {
    this.renderer.addClass(this.el, `storage-button-${value}`);
    this._type = value;
  }

  get storageType(): ButtonType {
    return this._type;
  }

  @Input()
  set storageSize(value: ButtonSize) {
    this.renderer.addClass(this.el, `storage-button-${value}`);
  }

  @Input('storageGhost')
  set ghost(value: boolean) {
    if (value) {
      this.renderer.addClass(this.el, 'storage-button-ghost');
      this.renderer.removeClass(this.el, `storage-button-${this.storageType}`);
      this.renderer.addClass(this.el, `storage-button-${this.storageType}-ghost`);
    }
  }

  private _loading = false;
  private _type: ButtonType;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    this.renderer.addClass(this.el, 'storage-button');
  }


}
