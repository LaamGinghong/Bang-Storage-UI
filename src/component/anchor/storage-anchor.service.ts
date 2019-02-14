import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class StorageAnchorService {
  public clickHref$ = new Subject<boolean>();

  constructor() {
  }
}
