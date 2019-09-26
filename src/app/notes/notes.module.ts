import { NgModule } from '@angular/core';
import { NotesViewComponent } from 'src/app/notes/notes-view/notes-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotesRoutingModule } from 'src/app/notes/notes-routing.module';


@NgModule({
  declarations: [
    NotesViewComponent,
  ],
  imports: [
    SharedModule,
    NotesRoutingModule
  ]
})
export class NotesModule {
}
