import {Component, OnInit} from '@angular/core';
import {PagesMenu} from './pages-menu';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {
  menu = PagesMenu;
  isBackTop = false;

  constructor(
    private _router: Router,
    private _title: Title
  ) {
  }

  ngOnInit(): void {
    const urls = this._router.url.split('/');
    urls.shift();
    if (urls.length === 2) {
      this.menu.forEach((item: { selected: boolean, route: string, name: string, children: Array<object> }) => {
        item.selected = item.route === urls[urls.length - 1];
      });
    } else {
      this.isBackTop = urls[2] === 'backTop';
      const array = this.menu[3].children as Array<{ route: string, selected: boolean }>;
      array.forEach(item => {
        item.selected = item.route === urls[2];
      });
    }
  }

  changePage(name: string, route: string, parentRoute?: string): void {
    this._router.navigateByUrl(`pages/${parentRoute ? `${parentRoute}/${route}` : `${route}`}`).then((value: boolean) => {
      if (value) {
        this.isBackTop = route === 'backTop';
        this._title.setTitle(name);
      }
    });
  }
}
