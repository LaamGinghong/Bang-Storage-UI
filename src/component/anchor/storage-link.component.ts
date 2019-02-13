import {Component, ElementRef, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'storage-link',
  template: `
    <a [href]="href">{{title}}</a>
  `,
  styles: [`
    a {
      display: block;
      color: rgba(0, 0, 0, .65);
    }
  `]
})

export class StorageLinkComponent {
  private _href: string;

  @Input('storageHref')
  set href(value: string) {
    this._href = value;
  }

  get href(): string {
    return `${this._router.url.split('#')[0]}${this._href}`;
  }

  @Input('storageTitle') title: string;


  constructor(
    private _router: Router,
    public elementRef: ElementRef
  ) {
  }
}
