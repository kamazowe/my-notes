import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.scss']
})
export class NotesAddComponent implements OnInit {
  @ViewChild('titleInput', { static: false }) titleInputRef: ElementRef;
  @ViewChild('descInput', { static: false }) descInputRef: ElementRef;
  @ViewChild('contentInput', { static: false }) contentInputRef: ElementRef;
  @ViewChild('imgPathInput', { static: false }) imgPathInputRef: ElementRef;
  newNote: Note = {
                  title: '', 
                  date: JSON.stringify(new Date()),
                  description: '', 
                  content: '', 
                  id: 1, 
                  imagePath: ''
                }

  constructor(private notesService: NotesService) { }

  ngOnInit() {

  }

  onAddNote() {
    this.newNote.title = this.titleInputRef.nativeElement.value
    this.newNote.description = this.descInputRef.nativeElement.value
    this.newNote.content = this.contentInputRef.nativeElement.value
    this.newNote.imagePath = this.imgPathInputRef.nativeElement.value
    this.notesService.addNote(this.newNote);
    this.titleInputRef.nativeElement.value = '';
    this.descInputRef.nativeElement.value = '';
    this.contentInputRef.nativeElement.value = '';
    this.imgPathInputRef.nativeElement.value = '';
  }

}
