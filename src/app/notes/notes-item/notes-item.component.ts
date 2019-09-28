import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.scss'],
})
export class NotesItemComponent implements OnInit {
  @Input() note: Note;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  onSelected() {
    this.notesService.noteSelected.emit(this.note);
  }
}
