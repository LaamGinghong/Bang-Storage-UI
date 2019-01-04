import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable()

export class StorageModalService {
  private _content: HTMLElement;
  private _dragging = false;
  private _mouseLeft: number;
  private _mouseTop: number;
  private _modalLeft: number;
  private _modalTop: number;
  private _screen = document.body as HTMLElement;
  private _renderer: Renderer2;


  constructor(
    _rendererFactory: RendererFactory2
  ) {
    this._renderer = _rendererFactory.createRenderer(null, null);
  }

  public initModal(): void {
    const modalTitle = document.getElementsByClassName('ant-modal-title')[0];
    this._content = document.getElementsByClassName('ant-modal')[0] as HTMLElement;
    this._modalLeft = (this._screen.offsetWidth - this._content.offsetWidth) / 2;
    this._modalTop = 100;
    this._renderer.setStyle(this._content, 'position', 'absolute');
    this._renderer.setStyle(this._content, 'left', `${this._modalLeft}px`);
    this._renderer.setStyle(this._content, 'top', `${this._modalTop}px`);
    this._renderer.setStyle(modalTitle, 'cursor', 'move');
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
}
