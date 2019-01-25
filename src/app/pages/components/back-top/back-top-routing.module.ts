import {RouterModule, Routes} from '@angular/router';
import {BackTopComponent} from './back-top.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: BackTopComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BackTopRoutingModule {
}
