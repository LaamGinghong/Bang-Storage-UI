import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[storage-carousel-content]',
  templateUrl: '<ng-content></ng-content>',
  styles: [`
    .storage-carousel-content {
      float: left;
    }
  `],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class StorageCarouselContentComponent {
  @HostBinding('style.width') width = '720px';
  @HostBinding('style.height') height = '220px';
  @HostBinding('class.storage-carousel-content') readonly float = true;

  constructor() {
  }
}
