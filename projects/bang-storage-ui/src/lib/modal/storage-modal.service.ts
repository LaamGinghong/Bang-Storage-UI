import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable()

export class StorageModalService {
  private content: HTMLElement;
  private dragging = false;
  private mouseLeft: number;
  private mouseTop: number;
  private modalLeft: number;
  private modalTop = 100;
  private screen = document.body as HTMLElement;
  private renderer: Renderer2;


  constructor(
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public initModal(): void {
    const modalTitle = document.getElementsByClassName('ant-modal-title')[0];
    this.content = document.getElementsByClassName('ant-modal')[0] as HTMLElement;
    this.modalLeft = (this.screen.offsetWidth - this.content.offsetWidth) / 2;
    this.renderer.setStyle(this.content, 'position', 'absolute');
    this.renderer.setStyle(this.content, 'left', `${this.modalLeft}px`);
    this.renderer.setStyle(this.content, 'top', `${this.modalTop}px`);
    this.renderer.setStyle(modalTitle, 'cursor', 'move');
  }

  public drag(e: MouseEvent): void {
    if (e.target['parentElement']['className'] === 'ant-modal-title') {
      this.dragging = true;
      this.mouseLeft = e.clientX - this.modalLeft;
      this.mouseTop = e.clientY - this.modalTop;
    }
  }

  public move(e: MouseEvent): void {
    if (this.dragging) {
      this.modalLeft = e.clientX - this.mouseLeft < 0 ? 0 : e.clientX - this.mouseLeft;
      this.modalTop = e.clientY - this.mouseTop < 0 ? 0 : e.clientY - this.mouseTop;
      this.renderer.setStyle(this.content, 'left', `${this.modalLeft}px`);
      this.renderer.setStyle(this.content, 'top', `${this.modalTop}px`);
    }
  }
}
