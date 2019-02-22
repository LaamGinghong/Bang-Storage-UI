import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[storage-carousel-content]',
  template: '<ng-content></ng-content>',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .storage-carousel-content {
      float: left;
    }

    .storage-carousel-content-dark {
      background: #0d1a26;
      color: #fff;
    }

    .storage-carousel-content-dark > * {
      color: #fff;
    }
  `]
})
export class StorageCarouselContentComponent {
  @HostBinding('style.width') width = '720px';
  @HostBinding('style.height') height = '220px';
  @HostBinding('class.storage-carousel-content-dark') dark = true;
  @HostBinding('class.storage-carousel-content') readonly float = true;

  constructor() {
  }
}
