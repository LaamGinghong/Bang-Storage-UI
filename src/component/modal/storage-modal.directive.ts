import {Directive, HostListener, Renderer2} from '@angular/core';
import {StorageModalService} from './storage-modal.service';

@Directive({
  selector: '[storage-move-modal]'
})

export class StorageModalDirective {

  constructor(
    private storageModalService: StorageModalService
  ) {
  }

  @HostListener('window:mousedown', ['$event'])
  drag(e: MouseEvent): void {
    this.storageModalService.drag(e);
  }

  @HostListener('window:mouseup')
  drop(): void {
    this.storageModalService.drop();
  }

  @HostListener('window:mousemove', ['$event'])
  move(e: MouseEvent): void {
    this.storageModalService.move(e);
  }

  @HostListener('window:mousedown', ['$event'])
  zoomBegin(e: MouseEvent): void {
    this.storageModalService.zoomBegin(e);
  }

  @HostListener('window:mouseup', ['$event'])
  zoomEnd(): void {
    this.storageModalService.zoomEnd();
  }

  @HostListener('window:mousemove', ['$event'])
  zoomMove(e: MouseEvent): void {
    this.storageModalService.zoomMove(e);
  }
}
