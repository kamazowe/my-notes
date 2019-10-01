import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesViewComponent } from 'src/app/notes/notes-view/notes-view.component';
import { NotesAddComponent } from './notes-add/notes-add.component';


const routes: Routes = [
  {
    path: '',
    component: NotesViewComponent
  },
  {
    path: 'add-note',
    component: NotesAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {
}
