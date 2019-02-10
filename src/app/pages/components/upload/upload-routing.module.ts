import {RouterModule, Routes} from '@angular/router';
import {UploadComponent} from './upload.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: UploadComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule {
}
