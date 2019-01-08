import {
  AfterViewInit,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive, ElementRef,
  HostBinding,
  HostListener,
  Input, Renderer2,
  ViewContainerRef
} from '@angular/core';
import {StorageZoomComponent} from './storage-zoom.component';

@Directive({
  selector: '[storage-zoom]'
})

export class StorageZoomDirective implements AfterViewInit {
  componentRef: ComponentRef<StorageZoomComponent>;
  @Input('storagePath') path: string;
  readonly el: HTMLElement = this.elementRef.nativeElement;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
  }

  @HostListener('click')
  zoom(): void {
    this.container.clear();
    const factory: ComponentFactory<StorageZoomComponent> =
      this.resolver.resolveComponentFactory(StorageZoomComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.path = this.path;
    this.componentRef.instance.zoomOut.subscribe(() => {
      this.componentRef.destroy();
    });
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.el, 'cursor', 'zoom-in');
  }
}
