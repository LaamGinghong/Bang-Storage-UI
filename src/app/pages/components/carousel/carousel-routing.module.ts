import {RouterModule, Routes} from '@angular/router';
import {CarouselComponent} from './carousel.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: CarouselComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselRoutingModule {
}
