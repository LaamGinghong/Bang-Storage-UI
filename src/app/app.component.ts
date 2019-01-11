import {AfterViewInit, Component} from '@angular/core';
import {StorageChartsOption} from '../component/charts/storage-charts.option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  option: StorageChartsOption = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量', '销售额']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }, {
      name: '销售额',
      type: 'bar',
      data: [90, 23, 42, 50, 394, 32]
    }]
  };

  merge: StorageChartsOption = {};
  loading = false;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.merge = {
        series: [{
          name: '销量',
          type: 'bar',
          data: [10, 23, 46, 21, 34, 90]
        }, {
          name: '销售额',
          type: 'bar',
          data: [30, 23, 123, 435, 234, 201]
        }]
      };
      this.loading = false;
    }, 3000);
  }
}
