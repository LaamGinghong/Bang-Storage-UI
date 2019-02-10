import {RouterModule, Routes} from '@angular/router';
import {AnchorComponent} from './anchor.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: AnchorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AnchorRoutingModule {
}
