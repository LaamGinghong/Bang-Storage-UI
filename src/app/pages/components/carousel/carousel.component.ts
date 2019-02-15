import {Component, OnInit} from '@angular/core';
import TouchEmulator from 'touch-emulator/index.js';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    TouchEmulator();
  }

  click(e) {
    console.log(e);
  }
}
