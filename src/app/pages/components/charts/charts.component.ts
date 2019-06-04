import {Component, OnInit} from '@angular/core';
import {StorageChartsOption} from '../../../../../projects/bang-storage-ui/src/lib/charts';
// import {StorageChartsOption} from 'bang-storage-ui';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.less']
})
export class ChartsComponent implements OnInit {
  codeBox = {
    first: {
      show: false,
      value: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      } as StorageChartsOption,
      source: `
      import { Component } from '@angular/core';
      import { StorageChartsOption } from 'bang-storage-ui';

      @Component({
        selector: 'storage-charts-demo',
        template: \`
                    <div style="width: 700px;height: 300px;" storage-charts [storageOption]="option"></div>
                  \`
      })

      export class StorageChartsDemoComponent{

           option: StorageChartsOption = {
              xAxis: {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                  type: 'value'
                },
                series: [{
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  type: 'line'
                }]
           }

      }
      `
    },
    second: {
      show: false,
      source: `
      import { Component } from '@angular/core';
      import { StorageChartsOption } from 'bang-storage-ui';

      @Component({
        selector: 'storage-charts-demo',
        template: \`
                  <div style="width: 700px;height: 300px" storage-charts [storageOption]="option" [storageMerge]="merge"></div>
                  <button storage-button storageType="primary" (click)="changeOption()">Change Option</button>
                  \`
      })

      export class StorageChartsDemoComponent{
          option: StorageChartsOption = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
              }]
          }

          merge: StorageChartsOption = {};

          changeOption(): void {
              this.merge = {
                series: [{
                  data: [1680, 900, 563, 98349, 4562, 110, 76350],
                  type: 'line'
                }]
              };
          }
      }
      `
    },
    third: {
      show: false,
      value: false,
      source: `
      import { Component } from '@angular/core';
      import { StorageChartsOption } from 'bang-storage-ui';

      @Component({
        selector: 'storage-charts-demo',
        template: \`
                    <div style="width: 700px;height: 500px" storage-charts [storageOption]="option" [storageLoading]="loading" (click)="toggleLoading()"></div>
                  \`
      })

      export class StorageChartsDemoComponent{

          loading = false;

          value: StorageChartsOption = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
              }]
          }

          toggleLoading(): void{
              this.loading = true;
              setTimeout(() => {
                  this.loading = false;
              }, 3000);
          }
      }
      `
    }
  };

  merge: StorageChartsOption;
  tableData = [
    {name: '[storageOption]', description: '图表配置项', type: 'StorageChartsOption', default: '-'},
    {name: '[storageMerge]', description: '图标修改项', type: 'StorageChartsOption', default: '-'},
    {name: '[storageLoading]', description: '加载中', type: 'boolean', default: 'false'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  changeOption(): void {
    this.merge = {
      series: [{
        data: [1680, 900, 563, 98349, 4562, 110, 76350],
        type: 'line'
      }]
    };
  }

  toggleLoading(): void {
    this.codeBox.third.value = true;
    setTimeout(() => {
      this.codeBox.third.value = false;
    }, 3000);
  }
}
