import {AfterContentInit, Component, ContentChildren, ElementRef, Input, QueryList, Renderer2, ViewChild} from '@angular/core';
import {StorageCarouselContentComponent} from './storage-carousel-content.component';
import {StorageCarouselSize} from './storage-carousel.interface';

@Component({
  selector: 'storage-carousel',
  template: `
    <div class="storage-carousel" [ngStyle]="size">
      <div class="storage-carousel-container" #containerElement>
        <ng-content></ng-content>
      </div>
      <div class="storage-carousel-dot">
        <ul>
          <li *ngFor="let item of storageCarouselContent.toArray()"></li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./storage-carousel.component.less']
})
export class StorageCarouselComponent implements AfterContentInit {
  @ContentChildren(StorageCarouselContentComponent)
  public storageCarouselContent: QueryList<StorageCarouselContentComponent>;
  @ViewChild('containerElement')
  private _containerElement: ElementRef;
  @Input('storageSize') size: StorageCarouselSize = {
    width: '720px',
    height: '180px'
  };

  constructor(
    private _renderer: Renderer2
  ) {
  }

  ngAfterContentInit(): void {
    let containerWidth = 0;
    const {width, height} = this.size;
    this.storageCarouselContent.toArray().forEach(item => {
      containerWidth += item.elementRef.nativeElement.offsetWidth;
      item.width = width;
      item.height = height;
    });
    this._renderer.setStyle(this._containerElement.nativeElement, 'width', `${containerWidth}px`);
  }
}
