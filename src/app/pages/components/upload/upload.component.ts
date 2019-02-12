import {Component, OnInit} from '@angular/core';
import {StorageUploadFile} from 'bang-storage-ui';
import {UploadService} from './upload.service';

// import {StorageUploadFile} from '../../../../component/upload/storage-upload-file';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less'],
  providers: [UploadService]
})
export class UploadComponent implements OnInit {
  codeBox = {
    first: {
      show: false,
      source: `
      import { Component } from '@angular/core';
      import { StorageUploadFile } from 'bang-storage-ui';
      import {Injectable} from '@angular/core';
      import {HttpClient} from '@angular/common/http';
      import {Observable} from 'rxjs';

      @Component({
        selector: 'storage-upload-demo',
        template: \`
                    <storage-upload (storageLastFileChange)="beforeUpload($event)"></storage-upload>
                  \`,
        providers: [UploadService]
      })

      export class StorageUploadDemoComponent{

        constructor(
                    private _uploadService: UploadService
                   ){
        }

        upload(e: StorageUploadFile): void{
          const form = new FormData();
          form.append('file', e);
          this._uploadService.upload(form).subscribe(result => {
          });
        }
      }

      @Injectable()

      export class UploadService{

        constructor(
                    private _http: HttpClient
                   ){
        }

        upload(value: any): Observable<any> {
          return this._http.post('https://jsonplaceholder.typicode.com/posts', value);
        }
      }
      `
    },
    second: {
      show: false,
      source: `
      import { Component } from '@angular/core';
      import { StorageUploadFile } from 'bang-storage-ui';
      import {Injectable} from '@angular/core';
      import {HttpClient} from '@angular/common/http';
      import {Observable} from 'rxjs';

      @Component({
        selector: 'storage-upload-demo',
        template: \`
                    <storage-upload [storageTemplate]="customUploadTemplate" (storageLastFileChange)="beforeUpload($event)">
                      <ng-template #customUploadTemplate>
                        <div id="customUploadTemplate">+</div>
                      </ng-template>
                    </storage-upload>
                  \`,
        providers: [UploadService],
        styles:[\`
                  #customUploadTemplate {
                    width: 200px;
                    height: 200px;
                    border-radius: 10px;
                    background: white;
                    text-align: center;
                    line-height: 200px;
                    font-size: 90px;
                    font-weight: bold;
                    cursor: pointer;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
                  }
                \`]
      })

      export class StorageUploadDemoComponent{

        constructor(
                    private _uploadService: UploadService
                   ){
        }

        upload(e: StorageUploadFile): void{
          const form = new FormData();
          form.append('file', e);
          this._uploadService.upload(form).subscribe(result => {
          });
        }
      }

      @Injectable()

      export class UploadService{

        constructor(
                    private _http: HttpClient
                   ){
        }

        upload(value: any): Observable<any> {
          return this._http.post('https://jsonplaceholder.typicode.com/posts', value);
        }
      }`
    },
    third: {
      show: false,
      value: [] as Array<StorageUploadFile>,
      source: `
      import {Component} from '@angular/core';
      import {StorageUploadFile} from 'bang-storage-ui';
      import {Injectable} from '@angular/core';
      import {HttpClient} from '@angular/common/http';
      import {Observable} from 'rxjs';

      @Component({
        selector: 'storage-upload-demo',
        template: \`
                    <storage-upload [(storageFileList)]="fileList"></storage-upload>
                    <ul style="margin-top: 20px;list-style: circle">
                      <li style="margin: 10px 0;" *ngFor="let item of fileList;let index=index">
                        <span>{{item.name}}</span>
                        <span style="float: right;cursor: pointer" (click)="fileList.splice(index,1)">
                          <i nz-icon type="close" theme="outline"></i>
                        </span>
                      </li>
                    </ul>
                    <button storage-button storageType="primary" (click)="upload()">上传</button>
                  \`,
        providers: [UploadService]
      })

      export class StorageUploadDemoComponent{

        fileList: Array<StorageUploadFile> = [];

        constructor(
                    private _uploadService: UploadService
                   ){
        }

        upload(): void{
          const form = new FormData();
          fileList.forEach((item,index) => {
            form.append('file' + index, item);
          });
          this._uploadService.upload(form).subscribe(result => {
          });
        }
      }

      @Injectable()

      export class UploadService{

        constructor(
                    private _http: HttpClient
                   ){
        }

        upload(value: any): Observable<any> {
          return this._http.post('https://jsonplaceholder.typicode.com/posts', value);
        }
      }`
    },
    forth: {
      show: false,
      number: 2,
      value: [] as StorageUploadFile[],
      source: `
      import {Component} from '@angular/core';
      import {StorageUploadFile} from 'bang-storage-ui';
      import {Injectable} from '@angular/core';
      import {HttpClient} from '@angular/common/http';
      import {Observable} from 'rxjs';

      @Component({
        selector: 'storage-upload-demo',
        template: \`
                    <storage-input-number [(storageValue)]="limited"></storage-input-number>
                    <br><br>
                    <storage-upload [(storageFileList)]="fileList" storageMultiple [storageLimited]="limited"></storage-upload>
                    <ul style="margin-top: 20px;list-style: circle">
                      <li style="margin: 10px 0;" *ngFor="let item of fileList;let index=index">
                        <span>{{item.name}}</span>
                        <span style="float: right;cursor: pointer" (click)="fileList.splice(index,1)">
                          <i nz-icon type="close" theme="outline"></i>
                        </span>
                      </li>
                    </ul>
                    <button storage-button storageType="primary" (click)="upload()">上传</button>
                  \`,
        providers: [UploadService]
      })

      export class StorageUploadDemoComponent{

        limited = 2;
        fileList: Array<StorageUploadFile> = [];

        constructor(
                    private _uploadService: UploadService
                   ){
        }

        upload(): void{
          const form = new FormData();
          fileList.forEach((item,index) => {
            form.append('file' + index, item);
          });
          this._uploadService.upload(form).subscribe(result => {
          });
        }
      }

      @Injectable()

      export class UploadService{

        constructor(
                    private _http: HttpClient
                   ){
        }

        upload(value: any): Observable<any> {
          return this._http.post('https://jsonplaceholder.typicode.com/posts', value);
        }
      }`
    },
    fifth: {
      show: false,
      type: null,
      size: 1024,
      source: `
      import {Component} from '@angular/core';
      import {StorageUploadType} from 'bang-storage-ui';

      @Component({
        selector: 'storage-upload-demo',
        template: \`
                    <nz-select [(ngModel)]="type" style="width: 120px" nzAllowClear>
                      <nz-option nzLabel="image/jpeg" nzValue="image/jpeg"></nz-option>
                      <nz-option nzLabel="image/png" nzValue="image/png"></nz-option>
                    </nz-select>
                    <br><br>
                    <storage-input-number [(storageValue)]="size"></storage-input-number>
                    <br><br>
                    <storage-upload [storageType]="type" [storageSize]="size"></storage-upload>
                  \`
      })

      export class StorageUploadDemoComponent{
        type: StorageUploadType = null;
        size = 1024;
      }
      `
    }
  };

  tableData = [
    {name: '[storageTemplate]', description: '自定义上传按钮', type: 'TemplateRef<void>', default: '-'},
    {name: '[storageFileList]', description: '已选择上传文件列表，可双向绑定', type: 'Array<StorageUploadFile>', default: '[]'},
    {name: '[storageMultiple]', description: '是否支持多选,开启后按住ctrl可选择多个文件', type: 'boolean', default: 'false'},
    {name: '[storageDisabled]', description: '禁用上传按钮', type: 'boolean', default: 'false'},
    {name: '[storageLimited]', description: '限制上传文件的数量', type: 'number', default: '-'},
    {name: '[storageSize]', description: '限制上传文件的大小，单位为KB', type: 'number', default: '0'},
    {name: '[storageType]', description: '限制上传文件的类型，不填为任意类型，可选类型为：image/jpeg、image/png、image/gif、image/bmp', type: 'StorageUploadType', default: '-'},
    {name: '(storageFileListChange)', description: '上传文件列表发生改变', type: 'EventEmitter', default: '-'},
    {name: '(storageLastFileChange)', description: '当前选择上传的文件发生改变，单选有效', type: 'EventEmitter', default: '-'}
  ];

  constructor(
    private _uploadService: UploadService
  ) {
  }

  ngOnInit() {
  }

  singleUpload(e: StorageUploadFile): void {
    const form = new FormData();
    form.append('file', e);
    this._uploadService.upload(form).subscribe(result => {
    });
  }

  multipleUpload(e: StorageUploadFile[]): void {
    const form = new FormData();
    e.forEach((item, index: number) => {
      form.append(`file${index}`, item);
    });
    this._uploadService.upload(form).subscribe(result => {
    });
  }
}
