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
}
