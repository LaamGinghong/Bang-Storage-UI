import {RouterModule, Routes} from '@angular/router';
import {RecommendComponent} from './recommend.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: RecommendComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendRoutingModule {
}
