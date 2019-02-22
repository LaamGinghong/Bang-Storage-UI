import {AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, ViewChild} from '@angular/core';
import {StorageCarouselSize} from './storage-carousel.interface';
import {StorageCarouselContentComponent} from './storage-carousel-content/storage-carousel-content.component';
import {InputBoolean} from 'ng-zorro-antd';

@Component({
  selector: 'storage-carousel',
  templateUrl: './storage-carousel.component.html',
  styleUrls: ['./storage-carousel.component.less']
})

export class StorageCarouselComponent implements AfterContentInit, AfterViewInit {
  private _timer: any;
  private _size: StorageCarouselSize = {
    width: '720px',
    height: '220px'
  };
  public move = 0;
  public dotsArray: Array<{ selected: boolean }> = [];
  @ContentChildren(StorageCarouselContentComponent)
  private _contentChildren: QueryList<StorageCarouselContentComponent>;
  @ViewChild('container')
  private _container: ElementRef;

  @Input('storageSize')
  set size(value: StorageCarouselSize) {
    if (value.width) {
      this._size.width = value.width;
    }
    if (value.height) {
      this._size.height = value.height;
    }
  }

  get size(): StorageCarouselSize {
    return this._size;
  }

  @Input('storageDots') @InputBoolean() dots = true;
  @Input('storageDirection') @InputBoolean() direction = false;
  @Input('storageAutoRun') @InputBoolean() autoRun = false;
  @Input('storageAutoRunSpeed') speed = 3000;
  @Input('storageLight') @InputBoolean() light = false;
  @Output('storageClickIndex') clickIndex = new EventEmitter<number>();
  @Output('storageClickDirection') clickDirection = new EventEmitter<'pre' | 'next'>();

  constructor(
    private _renderer: Renderer2
  ) {
  }

  ngAfterContentInit(): void {
    this._renderer.setStyle(this._container.nativeElement, 'width', `${parseInt(this.size.width, 10) * this._contentChildren.toArray().length}px`);
    const {width, height} = this.size;
    this._contentChildren.toArray().forEach(item => {
      setTimeout(() => {
        item.width = width;
        item.height = height;
        item.dark = !this.light;
      });
    });
    this.dotsArray = this._contentChildren.toArray().map((_, index: number) => ({selected: !index}));
  }

  public changeIndex(e: number): void {
    this.dotsArray.forEach((item, index: number) => {
      item.selected = index === e;
    });
    const {width} = this.size;
    this.move = -parseInt(width, 10) * e;
    this.clickIndex.emit(e);
  }

  public clickDirectionButton(next = false): void {
    const {width} = this.size;
    if (next) {
      if (this.dotsArray[this.dotsArray.length - 1].selected) {
        return;
      }
      this.move -= parseInt(width, 10);
      for (let i = 0; i < this.dotsArray.length; i++) {
        if (this.dotsArray[i].selected) {
          this.dotsArray[i].selected = false;
          this.dotsArray[i + 1].selected = true;
          break;
        }
      }
      this.clickDirection.emit('pre');
    } else {
      if (this.dotsArray[0].selected) {
        return;
      }
      this.move += parseInt(width, 10);
      for (let i = 0; i < this.dotsArray.length; i++) {
        if (this.dotsArray[i].selected) {
          this.dotsArray[i].selected = false;
          this.dotsArray[i - 1].selected = true;
          break;
        }
      }
      this.clickDirection.emit('next');
    }
  }

  ngAfterViewInit(): void {
    this.setTimer(true);
  }

  public setTimer(set = false): void {
    if (this.autoRun) {
      if (set) {
        const {width} = this.size;
        this._timer = setInterval(() => {
          if (this.dotsArray[this.dotsArray.length - 1].selected) {
            this.dotsArray[0].selected = true;
            this.dotsArray[this.dotsArray.length - 1].selected = false;
            this.move = 0;
          } else {
            this.move -= parseInt(width, 10);
            for (let i = 0; i < this.dotsArray.length; i++) {
              if (this.dotsArray[i].selected) {
                this.dotsArray[i].selected = false;
                this.dotsArray[i + 1].selected = true;
                break;
              }
            }
          }
        }, this.speed);
      } else {
        clearInterval(this._timer);
      }
    }
  }
}
