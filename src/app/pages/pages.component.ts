import {Component, OnInit} from '@angular/core';
import {PagesMenu} from './pages-menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {
  menu = PagesMenu;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const urls = this.router.url.split('/');
    urls.shift();
    if (urls.length === 2) {
      this.menu.forEach((item: { selected: boolean, route: string, name: string, children: Array<object> }) => {
        item.selected = item.route === urls[urls.length - 1];
      });
    }
  }

  changePage(route: string, parentRoute?: string): void {
    this.router.navigateByUrl(`pages/${parentRoute ? `${parentRoute}/${route}` : `${route}`}`);
  }
}
