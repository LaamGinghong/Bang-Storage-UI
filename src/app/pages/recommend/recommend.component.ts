import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.less']
})
export class RecommendComponent implements OnInit {
  tableData = [{
    type: '可视化',
    name: 'NG ZORRO',
    link: 'https://ng.ant.design/docs/introduce/zh',
    description: 'Ant Design 设计规范的 Angular 实现'
  }, {
    type: '可视化',
    name: 'echarts',
    link: 'https://echarts.baidu.com/',
    description: '百度开源的可视化图表库'
  }, {
    type: '脚手架',
    name: 'Angular CLI',
    link: 'https://cli.angular.io/',
    description: 'Angular 的官方脚手架'
  }, {
    type: '调试工具',
    name: 'Angular Anguary',
    link: 'https://github.com/rangle/augury',
    description: 'Angular Chrome 调试工具'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
