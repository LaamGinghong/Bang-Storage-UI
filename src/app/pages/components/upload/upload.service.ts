import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class UploadService {

  constructor(
    private _http: HttpClient
  ) {
  }

  upload(value: any): Observable<any> {
    return this._http.post('https://jsonplaceholder.typicode.com/posts', value);
  }
}
