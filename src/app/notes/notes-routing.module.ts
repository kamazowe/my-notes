import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesViewComponent } from 'src/app/notes/notes-view/notes-view.component';
import { NotesItemComponent } from './notes-item/notes-item.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';


const routes: Routes = [
  {
    path: '',
    component: NotesViewComponent
  },
  {
    path: 'note',
    component: NotesDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {
}
