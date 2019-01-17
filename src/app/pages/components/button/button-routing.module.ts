import {RouterModule, Routes} from '@angular/router';
import {ButtonComponent} from './button.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: ButtonComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonRoutingModule {
}
