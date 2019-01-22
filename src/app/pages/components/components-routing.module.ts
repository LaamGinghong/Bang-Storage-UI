import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentsComponent} from './components.component';

const routes: Routes = [{
  path: '',
  component: ComponentsComponent,
  children: [{
    path: '',
    redirectTo: 'button',
    pathMatch: 'full'
  }, {
    path: 'button',
    loadChildren: './button/button.module#ButtonModule'
  }, {
    path: 'inputNumber',
    loadChildren: './input-number/input-number.module#InputNumberModule'
  }, {
    path: 'modal',
    loadChildren: './modal/modal.module#ModalModule'
  }, {
    path: 'zoom',
    loadChildren: './zoom/zoom.module#ZoomModule'
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
