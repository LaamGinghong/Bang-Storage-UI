import {AfterViewInit, Component, ContentChildren, ElementRef, Inject, OnDestroy, OnInit, QueryList, Renderer2, ViewChild} from '@angular/core';
import {StorageLinkComponent} from './storage-link.component';
import {DOCUMENT} from '@angular/common';
import {StorageAnchorService} from './storage-anchor.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'storage-anchor',
  template: `
    <div class="hover anchor" [hidden]="show" (mouseenter)="showAnchor()">
      悬浮显示
    </div>
    <div class="anchor" (mouseleave)="hideAnchor()" #showAnchorBox>
      <div class="anchor-line">
        <div class="anchor-ball" #ball></div>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .anchor {
      position: fixed;
      right: 10px;
      top: 200px;
      padding: 10px;
      background: #fff;
      border-radius: 4px 0 0 4px;
      border: 1px solid #E8E8E8;
      z-index: 999999999999999999999;
    }

    .hover {
      writing-mode: vertical-lr;
    }

    .show {
      transition: right 1s;
      border: none;
      padding: 10px 30px;
    }

    .anchor-line {
      height: 100%;
      width: 2px;
      background: #E8E8E8;
      position: absolute;
      left: 10px;
      top: 0;
    }

    .anchor-ball {
      position: absolute;
      width: 8px;
      height: 8px;
      left: 1px;
      border-radius: 8px;
      border: 2px solid #1890ff;
      background: #fff;
      transition: top .3s ease-in-out;
      transform: translateX(-50%);
    }
  `]
})

export class StorageAnchorComponent implements OnInit, AfterViewInit, OnDestroy {
  show = false;
  @ViewChild('showAnchorBox')
  private _showAnchorBox: ElementRef;
  @ViewChild('ball')
  private _ball: ElementRef;
  @ContentChildren(StorageLinkComponent)
  private _storageLinkComponent: QueryList<StorageLinkComponent>;
  private _clickHref$: Subscription = null;

  constructor(
    private _renderer: Renderer2,
    @Inject(DOCUMENT)
    private _document: any,
    private _storageAnchorService: StorageAnchorService
  ) {
  }

  ngOnInit(): void {
    this._clickHref$ = this._storageAnchorService.clickHref$.subscribe(() => {
      setTimeout(() => {
        this._initBall();
      });
    });
  }

  ngAfterViewInit(): void {
    this._renderer.setStyle(this._showAnchorBox.nativeElement, 'right', `-${this._showAnchorBox.nativeElement.offsetWidth}px`);
    this._initBall();
  }

  private _initBall(): void {
    const scrollTop = this._document.scrollingElement.scrollTop;
    const elementScrollTop = [];
    this._storageLinkComponent.toArray().forEach((item, index: number) => {
      elementScrollTop.push({
        index,
        top: Math.abs(this._document.querySelector(`#${item.href.split('#')[1]}`).getBoundingClientRect().top - scrollTop)
      });
    });
    elementScrollTop.sort((a: { index: number, top: number }, b: { index: number, top: number }): number => {
      return a.top - b.top;
    });
    this._storageLinkComponent.toArray().forEach((item, index: number) => {
      this._renderer.setStyle(item.elementRef.nativeElement.firstElementChild, 'color', index === elementScrollTop[0].index ? '#1890ff' : 'rgba(0, 0, 0, .65)');
    });
    const element = this._storageLinkComponent.toArray()[elementScrollTop[0].index].elementRef.nativeElement.firstElementChild;
    this._renderer.setStyle(this._ball.nativeElement, 'top', `${element.offsetTop + element.offsetHeight / 2 - 4}px`);
  }

  public showAnchor(): void {
    this.show = true;
    this._renderer.setStyle(this._showAnchorBox.nativeElement, 'right', '10px');
    this._renderer.addClass(this._showAnchorBox.nativeElement, 'show');
    this._initBall();
  }

  public hideAnchor(): void {
    this.show = false;
    this._renderer.setStyle(this._showAnchorBox.nativeElement, 'right', `-${this._showAnchorBox.nativeElement.offsetWidth}px`);
  }

  ngOnDestroy(): void {
    this._clickHref$.unsubscribe();
  }
}
