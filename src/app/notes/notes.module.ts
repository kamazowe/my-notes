import { NgModule } from '@angular/core';
import { NotesViewComponent } from 'src/app/notes/notes-view/notes-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotesRoutingModule } from 'src/app/notes/notes-routing.module';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NotesItemComponent } from './notes-item/notes-item.component';
import { NotesListComponent } from './notes-list/notes-list.component';


@NgModule({
  declarations: [
    NotesViewComponent,
    NotesListComponent,
    NotesDetailComponent,
    NotesItemComponent,
  ],
  imports: [
    SharedModule,
    NotesRoutingModule
  ],
})
export class NotesModule {
}
