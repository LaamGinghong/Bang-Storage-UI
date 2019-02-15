import {AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, ViewChild} from '@angular/core';
import {StorageCarouselContentComponent} from './storage-carousel-content.component';
import {StorageCarouselClick, StorageCarouselGesture, StorageCarouselSize} from './storage-carousel.interface';
import Timer = NodeJS.Timer;
import {InputBoolean} from 'ng-zorro-antd';

@Component({
  selector: 'storage-carousel',
  template: `
    <div class="storage-carousel" [ngStyle]="size" (mouseenter)="clearTimer()" (mouseleave)="setTimer()">
      <div
        class="storage-carousel-container"
        #containerElement
        [style.transform]="'translateX('+moveX+'px)'"
        (swipeleft)="swipe($event.type)"
        (swiperight)="swipe($event.type)"
      >
        <ng-content></ng-content>
      </div>
      <div class="storage-carousel-dot" *ngIf="showDots">
        <ul>
          <li
            *ngFor="let item of containerList;let i=index"
            [class.storage-carousel-dot-selected]="item.selected"
            (click)="changeIndex(i)"
          ></li>
        </ul>
      </div>
      <div class="storage-carousel-direction" *ngIf="showDirection">
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
export class StorageCarouselComponent implements AfterContentInit, AfterViewInit {
  @ContentChildren(StorageCarouselContentComponent)
  public storageCarouselContent: QueryList<StorageCarouselContentComponent>;
  @ViewChild('containerElement')
  private _containerElement: ElementRef;
  @Input('storageSize') size: StorageCarouselSize = {
    width: '720px',
    height: '180px'
  };
  @Input('storageAutoPlay') @InputBoolean() autoPlay = false;
  @Input('storageAutoPlaySpeed') speed = 3000;
  @Input('storageDots') showDots = true;
  @Input('storageDirection') showDirection = true;
  @Output('storageClickDirection') clickDirection = new EventEmitter<StorageCarouselClick>();
  moveX = 0;
  isForbid = false;
  containerList: Array<{ selected: boolean }> = [];
  timer: Timer;

  constructor(
    private _renderer: Renderer2
  ) {
  }

  initContainer(): void {
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

  ngAfterContentInit(): void {
    this.initContainer();
  }

  ngAfterViewInit(): void {
    this.setTimer();
    this.initContainer();
  }

  changeIndex(index: number): void {
    this.moveX = -parseInt(this.size.width, 10) * index;
    this.containerList.forEach((item, i: number) => {
      item.selected = index === i;
    });
    this.checkForbid();
    this.clickDirection.emit({index});
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
    let index: number;
    for (let i = 0; i < this.containerList.length; i++) {
      if (this.containerList[i].selected) {
        this.containerList[i - 1].selected = true;
        this.containerList[i].selected = false;
        index = i - 1;
        break;
      }
    }
    this.checkForbid();
    this.clickDirection.emit({index, value: 'previous'});
  }

  nextIndex(): void {
    this.checkForbid();
    if (this.isForbid) {
      return;
    }
    this.moveX -= parseInt(this.size.width, 10);
    let index: number;
    for (let i = 0; i < this.containerList.length; i++) {
      if (this.containerList[i].selected) {
        this.containerList[i + 1].selected = true;
        this.containerList[i].selected = false;
        index = i + 1;
        break;
      }
    }
    this.checkForbid();
    this.clickDirection.emit({index, value: 'next'});
  }

  clearTimer(): void {
    clearInterval(this.timer);
  }

  setTimer(): void {
    if (this.autoPlay) {
      this.timer = setInterval(() => {
        if (Math.abs(this.moveX) === parseInt(this.size.width, 10) * (this.containerList.length - 1)) {
          this.moveX = 0;
          this.containerList.forEach((item, index: number) => {
            item.selected = !index;
          });
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
      }, this.speed);
    }
  }

  swipe(e: StorageCarouselGesture) {
    e === 'swipeleft' ? this.nextIndex() : this.previousIndex();
  }
}
