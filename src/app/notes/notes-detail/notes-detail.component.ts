import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators'
import { Note } from '../note.model';
import { NotesService } from '../notes.service';
import { cloneDeep } from 'lodash'

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
      return cloneDeep(note)
    })).subscribe((note) => {
      this.note = note;
    })
  }
}
