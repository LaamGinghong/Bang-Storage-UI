import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  number: number;

  change(value) {
    console.log(value);
  }

  click() {
    console.log(123);
  }
}
