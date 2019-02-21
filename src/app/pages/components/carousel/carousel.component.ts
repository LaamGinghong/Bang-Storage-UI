import {Component, OnInit} from '@angular/core';
import TouchEmulator from 'touch-emulator/index.js';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  array = [1, 2, 3, 4];

  constructor() {
  }

  ngOnInit() {
    TouchEmulator();
  }
}
