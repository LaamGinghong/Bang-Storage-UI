import {AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList, Renderer2, ViewChild} from '@angular/core';
import {StorageLinkComponent} from './storage-link.component';

@Component({
  selector: 'storage-anchor',
  template: `
    <!--<div class="hover anchor" [hidden]="show" (mouseenter)="_showAnchor()">
      悬浮显示
    </div>-->
    <div class="show anchor" (mouseleave)="_hideAnchor()" #showAnchor>
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

export class StorageAnchorComponent implements OnInit, AfterViewInit {
  show = false;
  @ViewChild('showAnchor')
  private _showAnchorBox: ElementRef;
  @ViewChild('ball')
  private _ball: ElementRef;
  @ContentChildren(StorageLinkComponent)
  private _storageLinkComponent: QueryList<StorageLinkComponent>;

  constructor(
    private _renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this._renderer.setStyle(this._showAnchorBox.nativeElement, 'right', `-${this._showAnchorBox.nativeElement.offsetWidth}px`);
    setTimeout(() => {
      this._storageLinkComponent.toArray().forEach((item, index: number) => {
        const element = item.elementRef.nativeElement;
        this._renderer.setStyle(this._ball.nativeElement, 'top', `${element.offsetTop + element.offsetHeight / 2 - 4}px`);
      });
    });
  }

  private _showAnchor(): void {
    this.show = true;
    this._renderer.setStyle(this._showAnchorBox.nativeElement, 'right', '10px');
    this._renderer.addClass(this._showAnchorBox.nativeElement, 'show');
  }

  private _hideAnchor(): void {
    /*const timer = setTimeout(() => {
      this.show = false;
      this._renderer.setStyle(this._showAnchorBox.nativeElement, 'right', `-${this._showAnchorBox.nativeElement.offsetWidth}px`);
      if (!this.show) {
        clearTimeout(timer);
      }
    }, 1000);*/
  }
}
