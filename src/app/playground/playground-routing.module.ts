import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesViewComponent } from 'src/app/notes/notes-view/notes-view.component';
import { PlaygroundViewComponent } from 'src/app/playground/playground-view/playground-view.component';


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
