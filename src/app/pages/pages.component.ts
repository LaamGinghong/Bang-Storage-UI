import {Component, OnInit} from '@angular/core';
import {PagesMenu} from './pages-menu';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {
  menu = PagesMenu;

  constructor() {
  }

  ngOnInit(): void {
  }

}
