import {RouterModule, Routes} from '@angular/router';
import {UsingComponent} from './using.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: UsingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsingRougingModule {
}
