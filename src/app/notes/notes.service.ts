import { Note } from "./note.model";
import { EventEmitter } from '@angular/core';

export class NotesService {
    noteSelected = new EventEmitter<Note>();

    public notes: Note[] = [
        new Note('Note title', '28.09.2019', 'Testing note', 1, 'https://cdn.pixabay.com/photo/2016/07/03/17/47/post-it-1495148_960_720.jpg'),
        new Note('Note title', '28.09.2019', 'Another testing note', 2,'https://cdn.pixabay.com/photo/2016/07/03/17/47/post-it-1495148_960_720.jpg')
    ];

    getNote() {
        return this.notes.slice();
    }
}