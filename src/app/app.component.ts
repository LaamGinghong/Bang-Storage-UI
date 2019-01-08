import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  array = [{
    value: 1,
    name: 'Apple'
  }, {
    value: 2,
    name: 'Alibaba'
  }];

  constructor() {
  }
}
