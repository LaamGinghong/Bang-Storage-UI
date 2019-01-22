import {RouterModule, Routes} from '@angular/router';
import {ChartsComponent} from './charts.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: ChartsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChartsRoutingModule {
}
