import {AfterContentInit, Component, ContentChildren, ElementRef, Input, QueryList, Renderer2, ViewChild} from '@angular/core';
import {StorageCarouselContentComponent} from './storage-carousel-content.component';
import {StorageCarouselSize} from './storage-carousel.interface';

@Component({
  selector: 'storage-carousel',
  template: `
    <div class="storage-carousel" [ngStyle]="size">
      <div class="storage-carousel-container" #containerElement [style.transform]="'translateX('+moveX+'px)'">
        <ng-content></ng-content>
      </div>
      <div class="storage-carousel-dot">
        <ul>
          <li
            *ngFor="let item of containerList;let i=index"
            [class.storage-carousel-dot-selected]="item.selected"
            (click)="changeIndex(i)"
          ></li>
        </ul>
      </div>
      <div class="storage-carousel-direction">
        <span
          class="storage-carousel-direction-left"
          [class.storage-carousel-direction-forbid]="moveX===0"
          (click)="previousIndex()">
          <i nz-icon type="left-circle" theme="outline"></i>
        </span>
        <span
          class="storage-carousel-direction-right"
          [class.storage-carousel-direction-forbid]="isForbid"
          (click)="nextIndex()">
          <i nz-icon type="right-circle" theme="outline"></i>
        </span>
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
  moveX = 0;
  isForbid = false;
  containerList: Array<{ selected: boolean }> = [];

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
    this.containerList = this.storageCarouselContent.toArray().map((item, index: number) => {
      return {
        selected: !index
      };
    });
    this._renderer.setStyle(this._containerElement.nativeElement, 'width', `${containerWidth}px`);
  }

  changeIndex(index: number): void {
    this.moveX = -parseInt(this.size.width, 10) * index;
    this.containerList.forEach((item, i: number) => {
      item.selected = index === i;
    });
    this.checkForbid();
  }

  checkForbid(): void {
    this.isForbid = Math.abs(this.moveX) === parseInt(this.size.width, 10) * (this.containerList.length - 1);
  }

  previousIndex(): void {
    this.checkForbid();
    if (this.moveX === 0) {
      return;
    }
    this.moveX += parseInt(this.size.width, 10);
    for (let index = 0; index < this.containerList.length; index++) {
      if (this.containerList[index].selected) {
        this.containerList[index - 1].selected = true;
        this.containerList[index].selected = false;
        break;
      }
    }
    this.checkForbid();
  }

  nextIndex(): void {
    this.checkForbid();
    if (this.isForbid) {
      return;
    }
    this.moveX -= parseInt(this.size.width, 10);
    for (let index = 0; index < this.containerList.length; index++) {
      if (this.containerList[index].selected) {
        this.containerList[index + 1].selected = true;
        this.containerList[index].selected = false;
        break;
      }
    }
    this.checkForbid();
  }
}
