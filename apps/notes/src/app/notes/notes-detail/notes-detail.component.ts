import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Note } from '../note.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss']
})
export class NotesDetailComponent implements OnInit {
  @Input() note: Note;

  constructor(private notesService: NotesService) {

  }

  ngOnInit() {
    this.notesService.noteSelected.pipe(map((note) => {
      return _.cloneDeep(note);
    })).subscribe((note) => {
      this.note = note;
    });
  }
}
