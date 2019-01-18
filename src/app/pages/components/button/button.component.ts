import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-css.min';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit, AfterViewInit {
  showCode = {
    first: false
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }

}
