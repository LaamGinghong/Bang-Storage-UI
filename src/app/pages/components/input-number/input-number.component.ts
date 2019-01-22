import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.less']
})
export class InputNumberComponent implements OnInit {
  codeBox = {
    first: {
      show: false,
      value: null as number,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-input-number-demo',
        template: \`
                     <storage-input-number
                          [(storageValue)]="value"
                          [storageMax]="100"
                          [storageMin]="0"
                     ></storage-input-number>
                  \`
      })

      export class StorageInputNumberDemoComponentClass{
          value: number;
      }
      `
    },
    second: {
      show: false,
      value: null as number,
      disabled: false,
      source: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'storage-input-number-demo',
        template: \`
                     <storage-input-number
                          [(storageValue)]="value"
                          [storageDisabled]="disabled"
                     ></storage-input-number>
                     <br><br>
                     <button storage-button storageType="primary" (click)="toggleDisabled()">Toggle Disabled</button>
                  \`
      })

      export class StorageInputNumberDemoComponentClass{
        value: number;
        disabled = false;

        toggleDisabled(): void{
          this.disabled = !this.disabled;
        }
      }
      `
    },
  };

  constructor() {
  }

  ngOnInit() {
  }

  toggleDisabled(): void {
    this.codeBox.second.disabled = !this.codeBox.second.disabled;
  }
}
