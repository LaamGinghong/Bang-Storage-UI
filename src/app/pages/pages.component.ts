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
  }

  changePage(route: string, parentRoute?: string): void {
    this.router.navigateByUrl(`pages/${parentRoute ? `${parentRoute}/${route}` : `${route}`}`);
  }
}
