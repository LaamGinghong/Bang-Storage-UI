import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[storage-carousel-content]',
  template: `
    <ng-content></ng-content>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .storage-carousel-content {
      float: left;
    }
  `]
})
export class StorageCarouselContentComponent {
  @HostBinding('class.storage-carousel-content') style = true;
  @HostBinding('style.width') width: string;
  @HostBinding('style.height') height: string;

  constructor(
    public elementRef: ElementRef
  ) {
  }
}
