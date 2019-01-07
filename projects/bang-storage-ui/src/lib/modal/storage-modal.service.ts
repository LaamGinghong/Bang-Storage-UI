import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable()

export class StorageModalService {
  private _content: HTMLElement;
  private _contentWidth: number;
  private _contentHeight: number;
  private _dragging = false;
  private _mouseLeft: number;
  private _mouseTop: number;
  private _modalLeft: number;
  private _modalTop: number;
  private _screen = document.body as HTMLElement;
  private _renderer: Renderer2;
  private _resizing = false;
  private _resizeLeft = false;
  private _resizeRight = false;
  private _mouseBegin: number;
  private _mouseEnd: number;

  constructor(
    _rendererFactory: RendererFactory2
  ) {
    this._renderer = _rendererFactory.createRenderer(null, null);
  }

  public initModal(): void {
    const modalTitle = document.getElementsByClassName('ant-modal-title')[0];
    const mask = document.getElementsByClassName('ant-modal-wrap')[0];
    this._content = document.getElementsByClassName('ant-modal')[0] as HTMLElement;
    this._contentWidth = this._content.offsetWidth;
    this._contentHeight = this._content.offsetHeight;
    this._modalLeft = (this._screen.offsetWidth - this._content.offsetWidth) / 2;
    this._modalTop = 100;
    this._renderer.setStyle(this._content, 'position', 'absolute');
    this._renderer.setStyle(this._content, 'left', `${this._modalLeft}px`);
    this._renderer.setStyle(this._content, 'top', `${this._modalTop}px`);
    this._renderer.setStyle(modalTitle, 'cursor', 'move');
    this._renderer.setStyle(mask, 'width', '100vw');
    this._renderer.setStyle(mask, 'height', '100vh');
    this._renderer.setStyle(mask, 'overflow', 'hidden');
  }

  public initZoom(): void {
    this._mouseBegin = this._mouseEnd = null;
    const left = this._renderer.createElement('div');
    const right = this._renderer.createElement('div');
    this._renderer.appendChild(this._content, left);
    this._renderer.addClass(left, 'storage-modal-zoom');
    this._renderer.addClass(left, 'storage-modal-zoom-left');
    this._renderer.appendChild(this._content, right);
    this._renderer.addClass(right, 'storage-modal-zoom');
    this._renderer.addClass(right, 'storage-modal-zoom-right');
  }

  public drag(e: MouseEvent): void {
    if (e.target['parentElement']['className'] === 'ant-modal-title') {
      this._dragging = true;
      this._mouseLeft = e.clientX - this._modalLeft;
      this._mouseTop = e.clientY - this._modalTop;
    }
    const zoom = e.target['className'] as string;
    if (typeof zoom === 'string') {
      if (zoom.split(' ').some((item: string) => item === 'storage-modal-zoom')) {
        this._resizing = true;
        this._mouseBegin = this._mouseEnd = e.clientX;
        this._resizeLeft = zoom.split(' ').some((item: string) => item === 'storage-modal-zoom-left');
        this._resizeRight = zoom.split(' ').some((item: string) => item === 'storage-modal-zoom-right');
      }
    }

  }

  public drop(): void {
    this._dragging = false;
    this._resizing = this._resizeLeft = this._resizeRight = false;
  }

  public move(e: MouseEvent): void {
    if (this._dragging) {
      if (e.clientX - this._mouseLeft < 0) {
        this._modalLeft = 0;
      } else {
        this._modalLeft = e.clientX - this._mouseLeft + this._contentWidth > this._screen.offsetWidth ?
          this._screen.offsetWidth - this._contentWidth : e.clientX - this._mouseLeft;
      }
      if (e.clientY - this._mouseTop < 0) {
        this._modalTop = 0;
      } else {
        this._modalTop = e.clientY - this._mouseTop + this._contentHeight > this._screen.offsetHeight ?
          this._screen.offsetHeight - this._contentHeight : e.clientY - this._mouseTop;
      }
      this._renderer.setStyle(this._content, 'left', `${this._modalLeft}px`);
      this._renderer.setStyle(this._content, 'top', `${this._modalTop}px`);
    }
    if (this._resizing) {
      this._mouseBegin = this._mouseEnd;
      this._mouseEnd = e.clientX;
      const instance = this._mouseBegin - this._mouseEnd;
      if (this._resizeLeft) {
        this._contentWidth += instance;
        this._modalLeft -= instance;
        if (this._contentWidth < 520) {
          this._contentWidth -= instance;
          this._modalLeft += instance;
        }
        this._renderer.setStyle(this._content, 'left', `${this._modalLeft}px`);
      }
      if (this._resizeRight) {
        this._contentWidth -= instance;
        if (this._contentWidth < 520) {
          this._contentWidth += instance;
        }
      }
      this._renderer.setStyle(this._content, 'width', `${this._contentWidth}px`);
    }
  }
}
