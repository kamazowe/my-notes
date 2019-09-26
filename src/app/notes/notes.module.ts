import { NgModule } from '@angular/core';
import { NotesViewComponent } from 'src/app/notes/notes-view/notes-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NotesViewComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class NotesModule {
}
