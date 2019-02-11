import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {StorageUploadFile, StorageUploadType} from './storage-upload-file';
import {DomSanitizer} from '@angular/platform-browser';
import {InputBoolean, NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'storage-upload',
  template: `
    <div class="storage-upload" (click)="uploadTemplate.click()">
      <ng-template #defaultTemplate>
        <button storage-button [disabled]="disabled">
          <span><i nz-icon type="upload" theme="outline"></i></span>
          上传
        </button>
      </ng-template>
      <ng-template [ngTemplateOutlet]="template||defaultTemplate"></ng-template>
      <input type="file" hidden [disabled]="disabled" [multiple]="multiple" #uploadTemplate (change)="upload($event)">
    </div>
  `
})

export class StorageUploadComponent implements OnInit {
  @Input('storageTemplate') template: TemplateRef<void>;
  @Input('storageFileList') fileList: StorageUploadFile[] = [];
  @Input('storageMultiple') @InputBoolean() multiple = false;
  @Input('storageDisabled') @InputBoolean() disabled = false;
  @Input('storageLimited') limited: number;
  @Input('storageSize') size: number;
  @Input('storageType') type: StorageUploadType;
  @Output() storageFileListChange = new EventEmitter<StorageUploadFile[]>();
  @Output() storageLastFileChange = new EventEmitter<StorageUploadFile>();

  constructor(
    private _sanitizer: DomSanitizer,
    private _message: NzMessageService
  ) {
  }

  ngOnInit(): void {
  }

  upload(e): void {
    const files = e.target.files as Array<StorageUploadFile>;
    if (this.type && Array.from(files).some(item => item.type !== this.type)) {
      this._message.error(`只能上传类型为${this.type}的文件！`);
      return;
    }
    if (this.fileList.length + files.length > this.limited) {
      this._message.error(`只能上传${this.limited}个文件！`);
      return;
    }
    if (Array.from(files).some(item => item.size / 1000 > this.size)) {
      this._message.error(`只能上传${(this.size / 1024).toFixed(2)}M的文件，请重新上传！`);
      return;
    }
    if (files.length) {
      if (this.multiple) {
        for (let value of files) {
          value = this.getURL(value);
          this.fileList.push(value);
        }
        this.storageFileListChange.emit(this.fileList);
      } else {
        const file = this.getURL(files[0]);
        this.fileList.push(file);
        this.storageLastFileChange.emit(file);
        this.storageFileListChange.emit(this.fileList);
      }
    }
  }

  getURL(e: StorageUploadFile): StorageUploadFile {
    let url = null;
    if (window.URL) {
      url = this._sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(e));
    }
    e.url = url;
    return e;
  }
}
