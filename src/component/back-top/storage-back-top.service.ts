import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class StorageBackTopService {
  private _doc: Document;

  constructor(@Inject(DOCUMENT) doc: any) {
    this._doc = doc;
  }

  scrollTo(containerEl: Element | Window, target: number): void {
    if (containerEl === window) {
      const scroll = setInterval(() => {
        if (this._doc.body.scrollTop === target && this._doc.documentElement.scrollTop === target) {
          clearInterval(scroll);
        }
        this._doc.body.scrollTop -= 10;
        this._doc.documentElement.scrollTop -= 10;
      }, 1);
    } else {
      const scroll = setInterval(() => {
        const container = containerEl as Element;
        if (container.scrollTop === target) {
          clearInterval(scroll);
        }
        container.scrollTop -= 10;
      }, 1);
    }
  }
}
