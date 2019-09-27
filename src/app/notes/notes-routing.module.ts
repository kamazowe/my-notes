import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesViewComponent } from 'src/app/notes/notes-view/notes-view.component';


const routes: Routes = [
  {
    path: '',
    component: NotesViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {
}
