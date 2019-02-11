import {Component, OnInit} from '@angular/core';
import {StorageUploadFile} from '../../../../component/upload/storage-upload-file';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {
  url = '';

  constructor() {
  }

  ngOnInit() {
  }

  uploadChange(e: StorageUploadFile[]): void {
    console.log(e);
  }
}
