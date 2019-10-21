import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundViewComponent } from './playground-view/playground-view.component';


const routes: Routes = [

  {
    path: '',
    component: PlaygroundViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule {
}
