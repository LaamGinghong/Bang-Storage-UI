import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[dragDropMove]'
})
export class StorageThDirective implements OnInit {
  @Input() elementRef: ElementRef;
  private _isMove = false;
  private _thisWidth: number;
  private _begin: number;
  private _currentWidth: number;

  constructor(
    private _renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    this._thisWidth = this.elementRef.nativeElement.offsetWidth;
  }

  @HostListener('mousedown', ['$event'])
  drag(e: MouseEvent): void {
    this._thisWidth = this.elementRef.nativeElement.offsetWidth;
    this._isMove = this._thisWidth >= 50;
    this._begin = e.clientX;
  }

  @HostListener('window:mouseup')
  drop(): void {
    this._isMove = false;
    this._thisWidth = this._currentWidth;
  }

  @HostListener('window:mousemove', ['$event'])
  move(e: MouseEvent): void {
    if (this._isMove) {
      const movement = e.clientX - this._begin;
      this._currentWidth = this._thisWidth + movement;
      if (this._currentWidth >= 50) {
        this._renderer.setStyle(this.elementRef.nativeElement, 'width', `${this._currentWidth}px`);
      } else {
        this._isMove = false;
        this._thisWidth = 50;
      }
    }
  }


}
