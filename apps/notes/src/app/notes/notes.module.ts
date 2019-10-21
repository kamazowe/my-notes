import { NgModule } from '@angular/core';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NotesItemComponent } from './notes-item/notes-item.component';
import { SharedModule } from '../shared/shared.module';
import { NotesRoutingModule } from './notes-routing.module';


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
