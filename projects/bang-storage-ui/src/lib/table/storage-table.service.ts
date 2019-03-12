import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageTableService {
  storageChangeWidth$ = new Subject<boolean>();

  constructor() {
  }
}
