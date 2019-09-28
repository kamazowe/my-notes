import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note.model';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss']
})
export class NotesDetailComponent implements OnInit {
  @Input() note: Note;

  constructor() {

  }

  ngOnInit() {
  }

}
