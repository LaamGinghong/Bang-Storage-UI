import {RouterModule, Routes} from '@angular/router';
import {InputNumberComponent} from './input-number.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: InputNumberComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputNumberRoutingModule {
}
