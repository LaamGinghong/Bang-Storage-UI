import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';

@Injectable()

export class StorageModalService {
  private _content: HTMLElement;
  private _contentWidth: number;
  private _dragging = false;
  private _mouseLeft: number;
  private _mouseTop: number;
  private _modalLeft: number;
  private _modalTop: number;
  private _screen = document.body as HTMLElement;
  private _renderer: Renderer2;
  private _zooming = false;
  private _zoomBegin: number;
  private _zoomEnd: number;
  private _instance: number;


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
    this._modalLeft = (this._screen.offsetWidth - this._content.offsetWidth) / 2;
    this._modalTop = 100;
    this._renderer.setStyle(this._content, 'position', 'absolute');
    this._renderer.setStyle(this._content, 'left', `${this._modalLeft}px`);
    this._renderer.setStyle(this._content, 'top', `${this._modalTop}px`);
    this._renderer.setStyle(modalTitle, 'cursor', 'move');
    this._renderer.setStyle(mask, 'width', '100%');
    this._renderer.setStyle(mask, 'height', '100%');
    this._renderer.setStyle(mask, 'overflow', 'hidden');
  }

  public drag(e: MouseEvent): void {
    if (e.target['parentElement']['className'] === 'ant-modal-title') {
      this._dragging = true;
      this._mouseLeft = e.clientX - this._modalLeft;
      this._mouseTop = e.clientY - this._modalTop;
    }
  }

  public drop(): void {
    this._dragging = false;
  }

  public move(e: MouseEvent): void {
    if (this._dragging) {
      this._modalLeft = e.clientX - this._mouseLeft < 0 ? 0 : e.clientX - this._mouseLeft;
      this._modalTop = e.clientY - this._mouseTop < 0 ? 0 : e.clientY - this._mouseTop;
      this._renderer.setStyle(this._content, 'left', `${this._modalLeft}px`);
      this._renderer.setStyle(this._content, 'top', `${this._modalTop}px`);
    }
  }

  public initZoom(modal: NzModalRef): void {
    modal.getInstance().nzMaskClosable = false;
    const content = document.getElementsByClassName('ant-modal-content')[0];
    const left = this._renderer.createElement('div');
    this._renderer.addClass(left, 'storage-modal-zoom');
    this._renderer.addClass(left, 'storage-modal-zoom-vertical');
    this._renderer.addClass(left, 'storage-modal-zoom-left');
    this._renderer.appendChild(content, left);
    const right = this._renderer.createElement('div');
    this._renderer.addClass(right, 'storage-modal-zoom');
    this._renderer.addClass(right, 'storage-modal-zoom-vertical');
    this._renderer.addClass(right, 'storage-modal-zoom-right');
    this._renderer.appendChild(content, right);
    const top = this._renderer.createElement('div');
    this._renderer.addClass(top, 'storage-modal-zoom');
    this._renderer.addClass(top, 'storage-modal-zoom-horizontal');
    this._renderer.addClass(top, 'storage-modal-zoom-top');
    this._renderer.appendChild(content, top);
    const bottom = this._renderer.createElement('div');
    this._renderer.addClass(bottom, 'storage-modal-zoom');
    this._renderer.addClass(bottom, 'storage-modal-zoom-horizontal');
    this._renderer.addClass(bottom, 'storage-modal-zoom-bottom');
    this._renderer.appendChild(content, bottom);
  }

  public zoomBegin(e: MouseEvent): void {
    const className = e.target['className'] as string;
    const classList = className.split(' ');
    if (classList.some((item: string) => item === 'storage-modal-zoom')) {
      if (classList.some((item: string) => item === 'storage-modal-zoom-left')) {
        this._zoomBegin = this._zoomEnd = e.clientX;
      }
      this._zooming = true;
    }
  }

  public zoomEnd(): void {
    this._zooming = false;
    this._zoomBegin = this._zoomEnd = this._instance = 0;
  }

  public zoomMove(e: MouseEvent): void {
    if (this._zooming) {
      this._zoomBegin = this._zoomEnd;
      this._zoomEnd = e.clientX;
      this._instance = this._zoomBegin - this._zoomEnd;
      this._modalLeft -= this._instance;
      this._contentWidth += this._instance;
      if (this._contentWidth >= 520) {
        this._renderer.setStyle(this._content, 'width', `${this._contentWidth}px`);
        this._renderer.setStyle(this._content, 'left', `${this._modalLeft}px`);
        console.log(this._contentWidth);
      } else {
        this._modalLeft += this._instance;
        this._contentWidth -= this._instance;
      }
    }
  }
}
