import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: 'pages',
  component: PagesComponent,
  children: [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  }, {
    path: 'using',
    loadChildren: './using/using.module#UsingModule'
  }, {
    path: 'recommend',
    loadChildren: './recommend/recommend.module#RecommendModule'
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
