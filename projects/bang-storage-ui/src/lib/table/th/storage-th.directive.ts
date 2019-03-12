import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[dragDropMove]'
})
export class StorageThDirective {
  private _isMove = false;
  private _moveInstance: number;
  private _begin: number;
  private _end: number;

  @HostListener('mousedown', ['$event'])
  drag(e: MouseEvent): void {
    this._isMove = true;
    this._begin = e.clientX;
  }

  @HostListener('window:mouseup')
  drop(): void {
    this._isMove = false;
  }

  @HostListener('window:mousemove', ['$event'])
  move(e: MouseEvent): void {
    if (this._isMove) {
      this._end = e.clientX;
      this._moveInstance = this._end - this._begin;
      console.log(this._moveInstance);
    }
  }
}
