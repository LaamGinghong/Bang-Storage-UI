import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[storage-carousel-content]',
  templateUrl: './storage-carousel-content.component.html',
  styleUrls: ['./storage-carousel-content.component.less'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class StorageCarouselContentComponent implements OnInit {
  @HostBinding('style.width') width = '720px';
  @HostBinding('style.height') height = '220px';
  @HostBinding('class.storage-carousel-content') readonly float = true;

  constructor(
    private _elementRef: ElementRef
  ) {
  }

  ngOnInit() {
  }

}
