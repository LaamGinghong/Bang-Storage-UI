import {RouterModule, Routes} from '@angular/router';
import {ZoomComponent} from './zoom.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: ZoomComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoomRoutingModule {
}
