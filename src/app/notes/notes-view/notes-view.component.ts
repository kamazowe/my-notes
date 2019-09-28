import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.scss'],
})
export class NotesViewComponent implements OnInit {
  selectedNote: Note;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.noteSelected.subscribe((note: Note) => {
      this.selectedNote = note;
    });
  }

}
