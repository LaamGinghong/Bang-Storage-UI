import {Component, EventEmitter, Inject, Input, OnInit, Output, Renderer2, TemplateRef} from '@angular/core';
import {StorageBackTopService} from './storage-back-top.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'storage-back-top',
  template: `
    <div class="storage-back-top" (click)="backTop()" [hidden]="hidden">
      <ng-template #defaultIcon>
        <div class="defaultIcon">
          <i nz-icon type="to-top" theme="outline"></i>
        </div>
      </ng-template>
      <ng-template [ngTemplateOutlet]="template||defaultIcon"></ng-template>
    </div>
  `,
  styles: [`
    .storage-back-top {
      position: fixed;
      right: 100px;
      bottom: 150px;
    }

    .defaultIcon {
      width: 40px;
      height: 40px;
      background: rgba(0, 0, 0, 0.45);
      border-radius: 50%;
      color: #fff;
      text-align: center;
      font-size: 21px;
      line-height: 40px;
    }
  `]
})

export class StorageBackTopComponent implements OnInit {
  @Input('storageTemplate') template: TemplateRef<void>;

  @Input('storageContainer')
  set container(value: string | HTMLElement) {
    this._container = typeof value === 'string' ? document.querySelector(value) : value;
  }

  @Input('storageTarget') target = 0;

  @Input('storageVisibilityHeight') height = 400;
  private _container: HTMLElement = null;
  hidden = true;

  @Output() storageClick = new EventEmitter<boolean>();

  private _getContainer(): HTMLElement | Window {
    return this._container || window;
  }

  constructor(
    private _storageBackTopService: StorageBackTopService,
    @Inject(DOCUMENT) private doc: any,
    private _renderer2: Renderer2
  ) {
  }

  ngOnInit(): void {
    this._renderer2.listen(this._getContainer(), 'scroll', (e: Event) => {
      if (this._getContainer() === window) {
        this.hidden = e.target['scrollingElement']['scrollTop'] < this.height;
      } else {
        this.hidden = e.target['scrollTop'] < this.height;
      }
    });
  }

  backTop(): void {
    this._storageBackTopService.scrollTo(this._getContainer(), this.target);
    this.storageClick.emit(true);
  }

}
